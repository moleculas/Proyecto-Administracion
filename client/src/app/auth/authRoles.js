/**
 * Authorization Roles
 */
export const authRoles = {
  admin: ['admin'],
  terapeuta: ['admin', 'terapeuta'],
  secretaria: ['admin', 'secretaria'],
  doctor: ['admin', 'doctor'],
  onlyGuest: [],
};

export const usuarioRoles = [
  { valor: "admin", label: "Admin" },
  { valor: "terapeuta", label: "Terapeuta" },
  { valor: "secretaria", label: "Secretaria" },
  { valor: "doctor", label: "Doctor" },
];
