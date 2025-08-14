/**
 * Formata um valor monetário para o formato português (EUR)
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);
}

/**
 * Formata um NIF com máscara
 */
export function formatNIF(nif: string): string {
  const cleanNIF = nif.replace(/\D/g, '');
  return cleanNIF.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
}

/**
 * Formata um telefone português com máscara
 */
export function formatPhone(phone: string): string {
  const cleanPhone = phone.replace(/\D/g, '');
  
  if (cleanPhone.length === 9) {
    return cleanPhone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
  }
  
  return phone;
}

/**
 * Formata uma data para o formato português
 */
export function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('pt-PT').format(dateObj);
}

/**
 * Formata uma data e hora para o formato português
 */
export function formatDateTime(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('pt-PT', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(dateObj);
}

/**
 * Capitaliza a primeira letra de cada palavra
 */
export function capitalize(str: string): string {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
} 