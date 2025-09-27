// pages/api/test-auth.js
import { google } from 'googleapis';

export default async function handler(req, res) {
  try {
    console.log('Testing Google Sheets authentication...');
    console.log('Project ID: mcat-survey-data');
    console.log('Client Email:', process.env.GOOGLE_CLIENT_EMAIL);
    console.log('Sheet ID:', process.env.GOOGLE_SHEET_ID);
    console.log('Private Key ID:', process.env.GOOGLE_PRIVATE_KEY_ID);
    
    // Check if all required env vars are present
    if (!process.env.GOOGLE_PRIVATE_KEY) {
      throw new Error('GOOGLE_PRIVATE_KEY environment variable is not set');
    }
    if (!process.env.GOOGLE_CLIENT_EMAIL) {
      throw new Error('GOOGLE_CLIENT_EMAIL environment variable is not set');
    }
    if (!process.env.GOOGLE_PRIVATE_KEY_ID) {
      throw new Error('GOOGLE_PRIVATE_KEY_ID environment variable is not set');
    }
    if (!process.env.GOOGLE_SHEET_ID) {
      throw new Error('GOOGLE_SHEET_ID environment variable is not set');
    }
    
    let privateKey = process.env.GOOGLE_PRIVATE_KEY;
    
    // Clean up the private key formatting
    if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
      privateKey = privateKey.slice(1, -1);
    }
    privateKey = privateKey.replace(/\\n/g, '\n');

    console.log('Creating complete service account credentials...');

    // Create complete service account credentials object
    const credentials = {
      type: "service_account",
      project_id: "mcat-survey-data",
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: privateKey,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: "",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${encodeURIComponent(process.env.GOOGLE_CLIENT_EMAIL)}`,
      universe_domain: "googleapis.com"
    };

    console.log('Creating Google Auth...');

    const auth = new google.auth.GoogleAuth({
      credentials: credentials,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive.file'
      ]
    });

    console.log('Creating sheets service...');

    const sheets = google.sheets({
      version: 'v4',
      auth: auth
    });

    console.log('Attempting to access spreadsheet...');

    // Try to get spreadsheet metadata
    const response = await sheets.spreadsheets.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID
    });

    res.status(200).json({ 
      success: true, 
      message: 'Authentication successful!',
      sheetTitle: response.data.properties.title,
      sheetCount: response.data.sheets.length,
      firstSheetName: response.data.sheets[0].properties.title
    });

  } catch (error) {
    console.error('Authentication test failed:', error);
    console.error('Full error:', JSON.stringify(error, null, 2));
    
    res.status(500).json({ 
      success: false, 
      message: 'Authentication failed',
      error: error.message,
      code: error.code || 'UNKNOWN'
    });
  }
}