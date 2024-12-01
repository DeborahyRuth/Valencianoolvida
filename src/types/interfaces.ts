export interface IFilters {
  city: string;
  person: string;
  province: string;
}

export interface IAffected {
  id: string;
  fullName: string;
  nickname?: string;
  dateOfBirth: string;
  dateOfDeath: string;
  description: string;
  images: string[];
  city: string;
  province: string;
  person: boolean;
}
