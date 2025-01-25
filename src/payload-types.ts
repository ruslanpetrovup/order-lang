/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    media: Media;
    reviews: Review;
    'contact-submissions': ContactSubmission;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    reviews: ReviewsSelect<false> | ReviewsSelect<true>;
    'contact-submissions': ContactSubmissionsSelect<false> | ContactSubmissionsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    header: Header;
    footer: Footer;
    hero: Hero;
    bring: Bring;
    features: Feature;
    press: Press;
    'how-it-works': HowItWork;
    about: About;
    contact: Contact;
  };
  globalsSelect: {
    header: HeaderSelect<false> | HeaderSelect<true>;
    footer: FooterSelect<false> | FooterSelect<true>;
    hero: HeroSelect<false> | HeroSelect<true>;
    bring: BringSelect<false> | BringSelect<true>;
    features: FeaturesSelect<false> | FeaturesSelect<true>;
    press: PressSelect<false> | PressSelect<true>;
    'how-it-works': HowItWorksSelect<false> | HowItWorksSelect<true>;
    about: AboutSelect<false> | AboutSelect<true>;
    contact: ContactSelect<false> | ContactSelect<true>;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "reviews".
 */
export interface Review {
  id: string;
  quote: string;
  author: string;
  employees?:
    | {
        name: string;
        position: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contact-submissions".
 */
export interface ContactSubmission {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null)
    | ({
        relationTo: 'reviews';
        value: string | Review;
      } | null)
    | ({
        relationTo: 'contact-submissions';
        value: string | ContactSubmission;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "reviews_select".
 */
export interface ReviewsSelect<T extends boolean = true> {
  quote?: T;
  author?: T;
  employees?:
    | T
    | {
        name?: T;
        position?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contact-submissions_select".
 */
export interface ContactSubmissionsSelect<T extends boolean = true> {
  firstName?: T;
  lastName?: T;
  email?: T;
  message?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: string;
  title: string;
  logo?: (string | null) | Media;
  navigationLinks?:
    | {
        label: string;
        url: string;
        submenu?:
          | {
              label: string;
              url: string;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: string;
  title: string;
  links?:
    | {
        icon: string | Media;
        label?: string | null;
        url: string;
        id?: string | null;
      }[]
    | null;
  bottomText?: string | null;
  address: string;
  city: string;
  email: string;
  socialLinks?:
    | {
        icon: string | Media;
        url: string;
        id?: string | null;
      }[]
    | null;
  copyright: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hero".
 */
export interface Hero {
  id: string;
  title: string;
  subtitle: string;
  background: string | Media;
  linkImages?:
    | {
        image: string | Media;
        link: string;
        id?: string | null;
      }[]
    | null;
  companyImages?:
    | {
        image: string | Media;
        link?: string | null;
        id?: string | null;
      }[]
    | null;
  quote: string;
  additionalImages?:
    | {
        image: string | Media;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "bring".
 */
export interface Bring {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  link: {
    label: string;
    url: string;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "features".
 */
export interface Feature {
  id: string;
  title: string;
  background: string | Media;
  description: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  featuresList?:
    | {
        icon: string | Media;
        title: string;
        description: string;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "press".
 */
export interface Press {
  id: string;
  title: string;
  description: string;
  pressList?:
    | {
        title: string;
        description: string;
        link: {
          label: string;
          url: string;
        };
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "how-it-works".
 */
export interface HowItWork {
  id: string;
  title: string;
  steps?:
    | {
        title: string;
        description: string;
        image: string | Media;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "about".
 */
export interface About {
  id: string;
  title: string;
  subtitle: string;
  background: string | Media;
  description: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  link: {
    label: string;
    url: string;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contact".
 */
export interface Contact {
  id: string;
  title: string;
  background: string | Media;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header_select".
 */
export interface HeaderSelect<T extends boolean = true> {
  title?: T;
  logo?: T;
  navigationLinks?:
    | T
    | {
        label?: T;
        url?: T;
        submenu?:
          | T
          | {
              label?: T;
              url?: T;
              id?: T;
            };
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer_select".
 */
export interface FooterSelect<T extends boolean = true> {
  title?: T;
  links?:
    | T
    | {
        icon?: T;
        label?: T;
        url?: T;
        id?: T;
      };
  bottomText?: T;
  address?: T;
  city?: T;
  email?: T;
  socialLinks?:
    | T
    | {
        icon?: T;
        url?: T;
        id?: T;
      };
  copyright?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hero_select".
 */
export interface HeroSelect<T extends boolean = true> {
  title?: T;
  subtitle?: T;
  background?: T;
  linkImages?:
    | T
    | {
        image?: T;
        link?: T;
        id?: T;
      };
  companyImages?:
    | T
    | {
        image?: T;
        link?: T;
        id?: T;
      };
  quote?: T;
  additionalImages?:
    | T
    | {
        image?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "bring_select".
 */
export interface BringSelect<T extends boolean = true> {
  title?: T;
  subtitle?: T;
  description?: T;
  link?:
    | T
    | {
        label?: T;
        url?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "features_select".
 */
export interface FeaturesSelect<T extends boolean = true> {
  title?: T;
  background?: T;
  description?: T;
  featuresList?:
    | T
    | {
        icon?: T;
        title?: T;
        description?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "press_select".
 */
export interface PressSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  pressList?:
    | T
    | {
        title?: T;
        description?: T;
        link?:
          | T
          | {
              label?: T;
              url?: T;
            };
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "how-it-works_select".
 */
export interface HowItWorksSelect<T extends boolean = true> {
  title?: T;
  steps?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "about_select".
 */
export interface AboutSelect<T extends boolean = true> {
  title?: T;
  subtitle?: T;
  background?: T;
  description?: T;
  link?:
    | T
    | {
        label?: T;
        url?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contact_select".
 */
export interface ContactSelect<T extends boolean = true> {
  title?: T;
  background?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}