import { faUser, faLocationDot, faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ProfileItem {
  id: 'age' | 'location' | 'institute';
  icon: IconDefinition;
  initialLabel: string;
}

const data: ProfileItem[] = [
  {
    id: 'age',
    icon: faUser,
    initialLabel: '', // initial NULL, update using State
  },
  {
    id: 'location',
    icon: faLocationDot,
    initialLabel: 'Amsterdam, Netherlands',
  },
  {
    id: 'institute',
    icon: faBuildingColumns,
    initialLabel: 'Amsterdam UMC',
  },
];

export const birthDate = new Date('1999-06-17');
export default data;
