import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const filename = request.nextUrl.searchParams.get('filename');
  
  if (!filename) {
    return NextResponse.json({ error: 'No filename provided' }, { status: 400 });
  }
  
  // Map the filename to the URL path in the public directory
  const fileMapping: Record<string, string> = {
    'P1 Video 1 Overview and Get Started.pdf': '/pdfs/part1-video1-overview.pdf',
    'P1 Video 2 Income &.pdf': '/pdfs/part1-video2-income.pdf',
    'P1 Video 3 Capital Gains.pdf': '/pdfs/part1-video3-capital.pdf',
    'P1 Video 4 Deductions.pdf': '/pdfs/part1-video4-deductions.pdf',
    'P1 Video 5 Calculating Tax and Tax Credits.pdf': '/pdfs/part1-video5-tax-credits.pdf',
    'P1 Video 6 Retirement and Social Security.pdf': '/pdfs/part1-video6-retirement.pdf',
    'P1 Video 7 Specialized Returns.pdf': '/pdfs/part1-video7-specialized.pdf',
  };
  
  const filePath = fileMapping[filename];
  
  if (!filePath) {
    return NextResponse.json({ error: 'File not found in mapping' }, { status: 404 });
  }

  // Redirect to the static file path
  return NextResponse.redirect(new URL(filePath, request.nextUrl.origin));
} 