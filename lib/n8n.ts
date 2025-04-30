/**
 * n8n Workflow Automation Integration
 * 
 * This module provides functionality to integrate with n8n for workflow automation.
 * It enables features like scheduled study reminders, daily question emails, 
 * and progress report generation.
 * 
 * In a real implementation, this would connect to an actual n8n instance.
 * For this demo, we're implementing a mock version.
 */

import axios from 'axios';

interface Workflow {
  id: string;
  name: string;
  active: boolean;
}

interface Reminder {
  userId: string;
  title: string;
  message: string;
  scheduledTime: string;
  type: 'email' | 'push' | 'sms';
}

// Base URL for n8n API (would be configured in env variables in production)
const N8N_API_URL = process.env.N8N_API_URL || 'http://localhost:5678/api/v1';
// API key for authentication (would be secured in env variables in production)
const N8N_API_KEY = process.env.N8N_API_KEY || 'your-n8n-api-key';

// Configure axios instance with base URL and authentication
const n8nApi = axios.create({
  baseURL: N8N_API_URL,
  headers: {
    'X-N8N-API-KEY': N8N_API_KEY,
    'Content-Type': 'application/json'
  }
});

/**
 * Schedule a daily question to be sent to the user
 */
export async function scheduleDailyQuestion(userId: string, preferredTime: string = '08:00', channel: 'email' | 'push' = 'email') {
  try {
    // In a real implementation, this would call the n8n API to trigger a workflow
    // For this demo, we'll simulate the API call
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Mock response
    return {
      success: true,
      message: 'Daily question scheduled successfully',
      details: {
        userId,
        workflow: 'daily-question-sender',
        schedule: `Every day at ${preferredTime}`,
        channel
      }
    };
  } catch (error) {
    console.error('Error scheduling daily question:', error);
    return {
      success: false,
      message: 'Failed to schedule daily question',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Schedule study reminders based on the user's study plan
 */
export async function scheduleStudyReminders(userId: string, studyPlan: any) {
  try {
    // In a real implementation, this would create reminders in n8n
    // For this demo, we'll return mock data
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 400));
    
    // Create mock reminders based on study plan
    const reminders: Reminder[] = [
      {
        userId,
        title: 'Study Reminder: Partnership Taxation',
        message: 'Time to focus on your weak area: Partnership Taxation. 45 minutes recommended.',
        scheduledTime: '18:00',
        type: 'push'
      },
      {
        userId,
        title: 'Weekly Progress Check',
        message: 'Review your weekly progress and adjust your study plan.',
        scheduledTime: '10:00',
        type: 'email'
      }
    ];
    
    return {
      success: true,
      message: 'Study reminders scheduled successfully',
      reminders
    };
  } catch (error) {
    console.error('Error scheduling study reminders:', error);
    return {
      success: false,
      message: 'Failed to schedule study reminders',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Generate and send a progress report to the user
 */
export async function generateProgressReport(userId: string, timeframe: 'weekly' | 'monthly' = 'weekly') {
  try {
    // In a real implementation, this would trigger a report generation workflow
    // For this demo, we'll return mock data
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      success: true,
      message: `${timeframe.charAt(0).toUpperCase() + timeframe.slice(1)} progress report scheduled for delivery`,
      details: {
        userId,
        reportType: timeframe,
        delivery: 'email',
        estimatedDelivery: '30 minutes'
      }
    };
  } catch (error) {
    console.error('Error generating progress report:', error);
    return {
      success: false,
      message: 'Failed to generate progress report',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * List all active workflows for a user
 */
export async function listActiveWorkflows(userId: string): Promise<Workflow[]> {
  try {
    // In a real implementation, this would fetch workflows from n8n
    // For this demo, we'll return mock data
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // Mock workflows
    return [
      {
        id: 'wf1',
        name: 'Daily Question Sender',
        active: true
      },
      {
        id: 'wf2',
        name: 'Study Reminder',
        active: true
      },
      {
        id: 'wf3',
        name: 'Weekly Progress Report',
        active: true
      },
      {
        id: 'wf4',
        name: 'Tax Law Update Notification',
        active: false
      }
    ];
  } catch (error) {
    console.error('Error listing workflows:', error);
    return [];
  }
} 