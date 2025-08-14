/**
 * Valida se um email é válido
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Valida se uma senha é forte (mínimo 8 caracteres, com letra maiúscula, minúscula e número)
 */
export function isStrongPassword(password: string): boolean {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

/**
 * Valida se um telefone português é válido
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^9[1236]\d{7}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
}

/**
 * Valida se um NIF (Número de Identificação Fiscal) é válido
 */
export function isValidNIF(nif: string): boolean {
  const cleanNIF = nif.replace(/\D/g, '');
  
  if (cleanNIF.length !== 9) return false;
  
  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1{8}$/.test(cleanNIF)) return false;
  
  // Validação do dígito verificador do NIF
  let sum = 0;
  for (let i = 0; i < 8; i++) {
    sum += parseInt(cleanNIF.charAt(i)) * (9 - i);
  }
  
  let remainder = sum % 11;
  let checkDigit = 11 - remainder;
  
  if (checkDigit >= 10) checkDigit = 0;
  
  return checkDigit === parseInt(cleanNIF.charAt(8));
} 