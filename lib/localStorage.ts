export interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
}

export interface DiagnosticAnswers {
  employees: string;
  revenue: string;
  role: string;
}

export function saveLeadData(data: LeadData): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('leadData', JSON.stringify(data));
  }
}

export function getLeadData(): LeadData | null {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem('leadData');
    return data ? JSON.parse(data) : null;
  }
  return null;
}

export function saveDiagnosticAnswers(answers: DiagnosticAnswers): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('diagnosticAnswers', JSON.stringify(answers));
  }
}

export function getDiagnosticAnswers(): DiagnosticAnswers | null {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem('diagnosticAnswers');
    return data ? JSON.parse(data) : null;
  }
  return null;
}
