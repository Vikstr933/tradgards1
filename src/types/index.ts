// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  imageUrl?: string
}

// Feature Types
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string
}

// Statistics Types
export interface Statistic {
  id: string;
  value: string;
  label: string;
  icon?: string
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string
}

export interface ContactFormState {
  data: ContactFormData;
  errors: ContactFormErrors;
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean
}

// Contact Information Types
export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  openingHours: OpeningHours
}

export interface OpeningHours {
  weekdays: string;
  saturday: string;
  sunday: string
}

// Navigation Types
export interface NavLink {
  id: string;
  label: string;
  href: string
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  service?: string
}

// Project/Portfolio Types
export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  completionDate: string;
  location: string;
  services: string[]
}

// Team Member Types
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
  experience: string
}

// FAQ Types
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string
}

// Company Info Types
export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  foundedYear: number;
  experienceYears: number;
  completedProjects: number;
  satisfiedClients: number
}

// Social Media Types
export interface SocialMedia {
  platform: string;
  url: string;
  icon: string
}

// Service Area Types
export interface ServiceArea {
  city: string;
  region: string;
  postalCodes?: string[]
}

// Utility Types
export type ServiceCategory = 'plattsattning' | 'tradgardsanlaggning' | 'murar' | 'tradgardsskotsel' | 'dranering' | 'belysning';

export type FormFieldType = 'text' | 'email' | 'tel' | 'textarea' | 'select';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export type ButtonSize = 'small' | 'medium' | 'large';

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string
}

export interface FormSubmissionResponse {
  success: boolean;
  message: string;
  submissionId?: string
}

// Component Props Types
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string
}

export interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void
}

export interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string
}

export interface InputProps {
  id: string;
  name: string;
  type: FormFieldType;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string
}

export interface SelectOption {
  value: string;
  label: string
}

export interface SelectProps extends Omit<InputProps, 'type'> {
  options: SelectOption[]
}
