// pages/api/survey/submit.js
import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('Authenticating with Google Sheets API...');
    
    // Validate all required environment variables
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
    
    // Handle private key formatting
    let privateKey = process.env.GOOGLE_PRIVATE_KEY;
    if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
      privateKey = privateKey.slice(1, -1);
    }
    privateKey = privateKey.replace(/\\n/g, '\n');

    console.log('Creating service account credentials...');
    
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
    
    // Use GoogleAuth with the complete credentials object
    const auth = new google.auth.GoogleAuth({
      credentials: credentials,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive.file'
      ]
    });

    console.log('Creating sheets service...');
    
    // Create the sheets service
    const sheets = google.sheets({
      version: 'v4',
      auth: auth
    });

    // Prepare survey data
    const surveyData = req.body;
    console.log('Survey data received:', Object.keys(surveyData));
    
    const values = [
      [
        new Date().toISOString(),
        surveyData.email || '',
        surveyData.name || '',
        surveyData.ageGroup || '',
        surveyData.testType || '',
        surveyData.testTiming || '',
        Array.isArray(surveyData.resources) ? surveyData.resources.join('; ') : (surveyData.resources || ''),
        surveyData.idealScore || '',
        surveyData.firstAttempt || '',
        Array.isArray(surveyData.contactMethod) ? surveyData.contactMethod.join('; ') : (surveyData.contactMethod || ''),
        surveyData.checkinFrequency || '',
        Array.isArray(surveyData.studyStyle) ? surveyData.studyStyle.join('; ') : (surveyData.studyStyle || ''),
        Array.isArray(surveyData.partnerQualities) ? surveyData.partnerQualities.join('; ') : (surveyData.partnerQualities || ''),
        Array.isArray(surveyData.studyGoals) ? surveyData.studyGoals.join('; ') : (surveyData.studyGoals || ''),
        Array.isArray(surveyData.difficultAreas) ? surveyData.difficultAreas.join('; ') : (surveyData.difficultAreas || ''),
        Array.isArray(surveyData.studyFocus) ? surveyData.studyFocus.join('; ') : (surveyData.studyFocus || ''),
        surveyData.additionalInfo || ''
      ]
    ];

    console.log('Appending data to spreadsheet...');

    // Append data to the spreadsheet
    const request = {
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:Q', // Using Sheet1 tab name confirmed from test
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: values
      }
    };

    const result = await sheets.spreadsheets.values.append(request);
    
    console.log('Success! Data appended to spreadsheet');

    res.status(200).json({ 
      success: true, 
      message: 'Survey submitted successfully',
      updatedRows: result.data.updates.updatedRows
    });

  } catch (error) {
    console.error('Error submitting survey:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to submit survey';
    if (error.message.includes('authentication')) {
      errorMessage = 'Authentication failed - please check your Google credentials';
    } else if (error.message.includes('spreadsheet')) {
      errorMessage = 'Spreadsheet access failed - please check the spreadsheet ID and permissions';
    }
    
    res.status(500).json({ 
      success: false, 
      message: errorMessage,
      error: error.message
    });
  }
}