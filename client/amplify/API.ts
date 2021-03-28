/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CompanyMastInput = {
  resourceType: ResourceType,
  companyID: string,
  name?: string | null,
  email?: string | null,
};

export enum ResourceType {
  UserMast = "UserMast",
  CompanyMast = "CompanyMast",
  ShopMast = "ShopMast",
  PlanMast = "PlanMast",
  InstructorMast = "InstructorMast",
  PlanTimelyStatus = "PlanTimelyStatus",
  ReservationObject = "ReservationObject",
}


export enum MutationFunctionNameHost {
  addCompanyMast = "addCompanyMast",
  updateCompanyMast = "updateCompanyMast",
  addShopMast = "addShopMast",
  updateShopMast = "updateShopMast",
  addPlanMast = "addPlanMast",
  updatePlanMast = "updatePlanMast",
  deletePlanMast = "deletePlanMast",
  addPlanTimelyStatusByShopIDAndPlanIDAndData = "addPlanTimelyStatusByShopIDAndPlanIDAndData",
  updatePlanTimelyStatusByShopIDAndPlanIDAndData = "updatePlanTimelyStatusByShopIDAndPlanIDAndData",
}


export type ShopMastInput = {
  resourceType: ResourceType,
  companyID: string,
  shopID: string,
  inSale: boolean,
  name: string,
  keyVisual?: S3ObjectInput | null,
  keyVisuals?: Array< S3ObjectInput > | null,
  twitterURL?: string | null,
  instagramURL?: string | null,
  facebookURL?: string | null,
  address?: AddressObjectInput | null,
  email?: string | null,
  tel?: string | null,
  logoImage?: S3ObjectInput | null,
  catchCopy?: string | null,
  createdAt?: number | null,
  updatedAt?: number | null,
};

export type S3ObjectInput = {
  bucket: string,
  keyName: string,
  region: string,
  mimeType?: string | null,
  fileName?: string | null,
};

export type AddressObjectInput = {
  nationality: string,
  postalCode?: string | null,
  state?: string | null,
  pref?: string | null,
  city: string,
  town: string,
  other?: string | null,
};

export type PlanMastInput = {
  resourceType: ResourceType,
  shopID: string,
  planID: string,
  name: string,
  catchCopy: string,
  explain: string,
  mainKeyVisual: S3ObjectInput,
  keyVisuals?: Array< S3ObjectInput > | null,
  availableDayOfTheWeek: Array< DayOfTheWeek >,
  address: AddressObjectInput,
  inSale: boolean,
  sortNum: number,
  price: PriceObjectInput,
  createdAt?: number | null,
  updatedAt?: number | null,
  deletedAt?: number | null,
};

export enum DayOfTheWeek {
  SUN = "SUN",
  MON = "MON",
  TUE = "TUE",
  WED = "WED",
  THU = "THU",
  FRI = "FRI",
  SAT = "SAT",
}


export type PriceObjectInput = {
  currencyType: CurrencyType,
  amount: number,
};

export enum CurrencyType {
  JPY = "JPY",
  USD = "USD",
}


export type PlanTimelyStatusInput = {
  shopID: string,
  planID: string,
  resourceID: string,
  dateTimeStart: string,
  dateTimeEnd: string,
  stockNum: number,
  soldNum: number,
  availableNum: number,
  isAvailable: boolean,
};

export type StatusUpdateInput = {
  shopID: string,
  data: Array< DailyStatusUpdateObjectInput >,
};

export type DailyStatusUpdateObjectInput = {
  resourceID: string,
  isAvailable?: boolean | null,
  availableNum?: number | null,
};

export type AddCompanyMastMutationVariables = {
  input: CompanyMastInput,
  action: MutationFunctionNameHost,
};

export type AddCompanyMastMutation = {
  addCompanyMast:  {
    __typename: "CompanyMast",
    resourceType: ResourceType,
    companyID: string,
    name: string | null,
    email: string | null,
  },
};

export type UpdateCompanyMastMutationVariables = {
  input: CompanyMastInput,
  action: MutationFunctionNameHost,
};

export type UpdateCompanyMastMutation = {
  updateCompanyMast:  {
    __typename: "CompanyMast",
    resourceType: ResourceType,
    companyID: string,
    name: string | null,
    email: string | null,
  },
};

export type AddShopMastMutationVariables = {
  input: ShopMastInput,
  action: MutationFunctionNameHost,
};

export type AddShopMastMutation = {
  addShopMast:  {
    __typename: "ShopMast",
    resourceType: ResourceType,
    companyID: string,
    shopID: string,
    inSale: boolean,
    name: string,
    keyVisual:  {
      __typename: "S3Object",
      bucket: string,
      keyName: string,
      region: string,
      mimeType: string | null,
      fileName: string | null,
    } | null,
    keyVisuals:  Array< {
      __typename: "S3Object",
      bucket: string,
      keyName: string,
      region: string,
      mimeType: string | null,
      fileName: string | null,
    } > | null,
    twitterURL: string | null,
    instagramURL: string | null,
    facebookURL: string | null,
    address:  {
      __typename: "AddressObject",
      nationality: string,
      postalCode: string | null,
      state: string | null,
      pref: string | null,
      city: string,
      town: string,
      other: string | null,
    } | null,
    email: string | null,
    tel: string | null,
    logoImage:  {
      __typename: "S3Object",
      bucket: string,
      keyName: string,
      region: string,
      mimeType: string | null,
      fileName: string | null,
    } | null,
    catchCopy: string | null,
    createdAt: number | null,
    updatedAt: number | null,
  },
};

export type UpdateShopMastMutationVariables = {
  input: ShopMastInput,
  action: MutationFunctionNameHost,
};

export type UpdateShopMastMutation = {
  updateShopMast:  {
    __typename: "ShopMast",
    resourceType: ResourceType,
    companyID: string,
    shopID: string,
    inSale: boolean,
    name: string,
    keyVisual:  {
      __typename: "S3Object",
      bucket: string,
      keyName: string,
      region: string,
      mimeType: string | null,
      fileName: string | null,
    } | null,
    keyVisuals:  Array< {
      __typename: "S3Object",
      bucket: string,
      keyName: string,
      region: string,
      mimeType: string | null,
      fileName: string | null,
    } > | null,
    twitterURL: string | null,
    instagramURL: string | null,
    facebookURL: string | null,
    address:  {
      __typename: "AddressObject",
      nationality: string,
      postalCode: string | null,
      state: string | null,
      pref: string | null,
      city: string,
      town: string,
      other: string | null,
    } | null,
    email: string | null,
    tel: string | null,
    logoImage:  {
      __typename: "S3Object",
      bucket: string,
      keyName: string,
      region: string,
      mimeType: string | null,
      fileName: string | null,
    } | null,
    catchCopy: string | null,
    createdAt: number | null,
    updatedAt: number | null,
  },
};

export type AddPlanMastMutationVariables = {
  input: PlanMastInput,
  action: MutationFunctionNameHost,
};

export type AddPlanMastMutation = {
  addPlanMast:  {
    __typename: "PlanMast",
    resourceType: ResourceType,
    shopID: string,
    planID: string,
    name: string,
    catchCopy: string,
    explain: string,
    mainKeyVisual:  {
      __typename: "S3Object",
      bucket: string,
      keyName: string,
      region: string,
      mimeType: string | null,
      fileName: string | null,
    },
    keyVisuals:  Array< {
      __typename: "S3Object",
      bucket: string,
      keyName: string,
      region: string,
      mimeType: string | null,
      fileName: string | null,
    } > | null,
    availableDayOfTheWeek: Array< DayOfTheWeek >,
    address:  {
      __typename: "AddressObject",
      nationality: string,
      postalCode: string | null,
      state: string | null,
      pref: string | null,
      city: string,
      town: string,
      other: string | null,
    },
    inSale: boolean,
    sortNum: number,
    price:  {
      __typename: "PriceObject",
      currencyType: CurrencyType,
      amount: number,
    },
    createdAt: number | null,
    updatedAt: number | null,
    deletedAt: number | null,
  },
};

export type UpdatePlanMastMutationVariables = {
  input: PlanMastInput,
  action: MutationFunctionNameHost,
};

export type UpdatePlanMastMutation = {
  updatePlanMast:  {
    __typename: "PlanMast",
    resourceType: ResourceType,
    shopID: string,
    planID: string,
    name: string,
    catchCopy: string,
    explain: string,
    mainKeyVisual:  {
      __typename: "S3Object",
      bucket: string,
      keyName: string,
      region: string,
      mimeType: string | null,
      fileName: string | null,
    },
    keyVisuals:  Array< {
      __typename: "S3Object",
      bucket: string,
      keyName: string,
      region: string,
      mimeType: string | null,
      fileName: string | null,
    } > | null,
    availableDayOfTheWeek: Array< DayOfTheWeek >,
    address:  {
      __typename: "AddressObject",
      nationality: string,
      postalCode: string | null,
      state: string | null,
      pref: string | null,
      city: string,
      town: string,
      other: string | null,
    },
    inSale: boolean,
    sortNum: number,
    price:  {
      __typename: "PriceObject",
      currencyType: CurrencyType,
      amount: number,
    },
    createdAt: number | null,
    updatedAt: number | null,
    deletedAt: number | null,
  },
};

export type DeletePlanMastMutationVariables = {
  input: PlanMastInput,
  action: MutationFunctionNameHost,
};

export type DeletePlanMastMutation = {
  deletePlanMast:  {
    __typename: "PlanMast",
    resourceType: ResourceType,
    shopID: string,
    planID: string,
    name: string,
    catchCopy: string,
    explain: string,
    mainKeyVisual:  {
      __typename: "S3Object",
      bucket: string,
      keyName: string,
      region: string,
      mimeType: string | null,
      fileName: string | null,
    },
    keyVisuals:  Array< {
      __typename: "S3Object",
      bucket: string,
      keyName: string,
      region: string,
      mimeType: string | null,
      fileName: string | null,
    } > | null,
    availableDayOfTheWeek: Array< DayOfTheWeek >,
    address:  {
      __typename: "AddressObject",
      nationality: string,
      postalCode: string | null,
      state: string | null,
      pref: string | null,
      city: string,
      town: string,
      other: string | null,
    },
    inSale: boolean,
    sortNum: number,
    price:  {
      __typename: "PriceObject",
      currencyType: CurrencyType,
      amount: number,
    },
    createdAt: number | null,
    updatedAt: number | null,
    deletedAt: number | null,
  },
};

export type AddPlanTimelyStatusByShopIdAndPlanIdAndDataMutationVariables = {
  input: Array< PlanTimelyStatusInput | null >,
  action: MutationFunctionNameHost,
};

export type AddPlanTimelyStatusByShopIdAndPlanIdAndDataMutation = {
  addPlanTimelyStatusByShopIDAndPlanIDAndData:  Array< {
    __typename: "PlanTimelyStatus",
    shopID: string,
    planID: string,
    resourceID: string,
    dateTimeStart: string,
    dateTimeEnd: string,
    stockNum: number,
    soldNum: number,
    availableNum: number,
    isAvailable: boolean,
  } >,
};

export type UpdatePlanTimelyStatusByShopIdAndPlanIdAndDataMutationVariables = {
  input: StatusUpdateInput,
  action: MutationFunctionNameHost,
};

export type UpdatePlanTimelyStatusByShopIdAndPlanIdAndDataMutation = {
  updatePlanTimelyStatusByShopIDAndPlanIDAndData:  Array< {
    __typename: "PlanTimelyStatus",
    shopID: string,
    planID: string,
    resourceID: string,
    dateTimeStart: string,
    dateTimeEnd: string,
    stockNum: number,
    soldNum: number,
    availableNum: number,
    isAvailable: boolean,
  } >,
};

export type FetchCompanyByCompanyIdQueryVariables = {
  companyID: string,
};

export type FetchCompanyByCompanyIdQuery = {
  fetchCompanyByCompanyID:  {
    __typename: "CompanyMastTable",
    resourceType: ResourceType,
    companyID: string,
    mast:  {
      __typename: "S3Object",
      bucket: string,
      keyName: string,
      region: string,
      mimeType: string | null,
      fileName: string | null,
    },
  },
};

export type FetchShopsByCompanyIdQueryVariables = {
  companyID: string,
};

export type FetchShopsByCompanyIdQuery = {
  fetchShopsByCompanyID:  Array< {
    __typename: "ShopMast",
    resourceType: ResourceType,
    companyID: string,
    shopID: string,
    inSale: boolean,
    name: string,
    keyVisual:  {
      __typename: "S3Object",
      bucket: string,
      keyName: string,
      region: string,
      mimeType: string | null,
      fileName: string | null,
    } | null,
    keyVisuals:  Array< {
      __typename: "S3Object",
      bucket: string,
      keyName: string,
      region: string,
      mimeType: string | null,
      fileName: string | null,
    } > | null,
    twitterURL: string | null,
    instagramURL: string | null,
    facebookURL: string | null,
    address:  {
      __typename: "AddressObject",
      nationality: string,
      postalCode: string | null,
      state: string | null,
      pref: string | null,
      city: string,
      town: string,
      other: string | null,
    } | null,
    email: string | null,
    tel: string | null,
    logoImage:  {
      __typename: "S3Object",
      bucket: string,
      keyName: string,
      region: string,
      mimeType: string | null,
      fileName: string | null,
    } | null,
    catchCopy: string | null,
    createdAt: number | null,
    updatedAt: number | null,
  } >,
};

export type FetchShopMastByShopIdQueryVariables = {
  shopID: string,
};

export type FetchShopMastByShopIdQuery = {
  fetchShopMastByShopID:  {
    __typename: "ShopMast",
    resourceType: ResourceType,
    companyID: string,
    shopID: string,
    inSale: boolean,
    name: string,
    keyVisual:  {
      __typename: "S3Object",
      bucket: string,
      keyName: string,
      region: string,
      mimeType: string | null,
      fileName: string | null,
    } | null,
    keyVisuals:  Array< {
      __typename: "S3Object",
      bucket: string,
      keyName: string,
      region: string,
      mimeType: string | null,
      fileName: string | null,
    } > | null,
    twitterURL: string | null,
    instagramURL: string | null,
    facebookURL: string | null,
    address:  {
      __typename: "AddressObject",
      nationality: string,
      postalCode: string | null,
      state: string | null,
      pref: string | null,
      city: string,
      town: string,
      other: string | null,
    } | null,
    email: string | null,
    tel: string | null,
    logoImage:  {
      __typename: "S3Object",
      bucket: string,
      keyName: string,
      region: string,
      mimeType: string | null,
      fileName: string | null,
    } | null,
    catchCopy: string | null,
    createdAt: number | null,
    updatedAt: number | null,
  },
};

export type FetchPlanMastsByShopIdQueryVariables = {
  shopID: string,
};

export type FetchPlanMastsByShopIdQuery = {
  fetchPlanMastsByShopID:  Array< {
    __typename: "PlanMast",
    resourceType: ResourceType,
    shopID: string,
    planID: string,
    name: string,
    catchCopy: string,
    explain: string,
    mainKeyVisual:  {
      __typename: "S3Object",
      bucket: string,
      keyName: string,
      region: string,
      mimeType: string | null,
      fileName: string | null,
    },
    keyVisuals:  Array< {
      __typename: "S3Object",
      bucket: string,
      keyName: string,
      region: string,
      mimeType: string | null,
      fileName: string | null,
    } > | null,
    availableDayOfTheWeek: Array< DayOfTheWeek >,
    address:  {
      __typename: "AddressObject",
      nationality: string,
      postalCode: string | null,
      state: string | null,
      pref: string | null,
      city: string,
      town: string,
      other: string | null,
    },
    inSale: boolean,
    sortNum: number,
    price:  {
      __typename: "PriceObject",
      currencyType: CurrencyType,
      amount: number,
    },
    createdAt: number | null,
    updatedAt: number | null,
    deletedAt: number | null,
  } >,
};

export type FetchPlanMastByShopIdAndPlanIdQueryVariables = {
  shopID: string,
  planID: string,
};

export type FetchPlanMastByShopIdAndPlanIdQuery = {
  fetchPlanMastByShopIDAndPlanID:  {
    __typename: "PlanMast",
    resourceType: ResourceType,
    shopID: string,
    planID: string,
    name: string,
    catchCopy: string,
    explain: string,
    mainKeyVisual:  {
      __typename: "S3Object",
      bucket: string,
      keyName: string,
      region: string,
      mimeType: string | null,
      fileName: string | null,
    },
    keyVisuals:  Array< {
      __typename: "S3Object",
      bucket: string,
      keyName: string,
      region: string,
      mimeType: string | null,
      fileName: string | null,
    } > | null,
    availableDayOfTheWeek: Array< DayOfTheWeek >,
    address:  {
      __typename: "AddressObject",
      nationality: string,
      postalCode: string | null,
      state: string | null,
      pref: string | null,
      city: string,
      town: string,
      other: string | null,
    },
    inSale: boolean,
    sortNum: number,
    price:  {
      __typename: "PriceObject",
      currencyType: CurrencyType,
      amount: number,
    },
    createdAt: number | null,
    updatedAt: number | null,
    deletedAt: number | null,
  },
};

export type FetchPlanDailyStatusByShopIdAndStartAndEndQueryVariables = {
  shopID: string,
  startDtTime: string,
  endDtTime: string,
};

export type FetchPlanDailyStatusByShopIdAndStartAndEndQuery = {
  fetchPlanDailyStatusByShopIDAndStartAndEnd:  Array< {
    __typename: "PlanTimelyStatus",
    shopID: string,
    planID: string,
    resourceID: string,
    dateTimeStart: string,
    dateTimeEnd: string,
    stockNum: number,
    soldNum: number,
    availableNum: number,
    isAvailable: boolean,
  } >,
};

export type FetchPlanTimelyStatusByShopIdAndResourceIdQueryVariables = {
  shopID: string,
  resourceID: string,
};

export type FetchPlanTimelyStatusByShopIdAndResourceIdQuery = {
  fetchPlanTimelyStatusByShopIDAndResourceID:  {
    __typename: "PlanTimelyStatus",
    shopID: string,
    planID: string,
    resourceID: string,
    dateTimeStart: string,
    dateTimeEnd: string,
    stockNum: number,
    soldNum: number,
    availableNum: number,
    isAvailable: boolean,
  },
};

export type FetchReservationObjectByShopIdAndReservationIdQueryVariables = {
  shopID: string,
  reservationID: string,
};

export type FetchReservationObjectByShopIdAndReservationIdQuery = {
  fetchReservationObjectByShopIDAndReservationID:  {
    __typename: "ReservationObjectTable",
    shopID: string,
    reservationID: string,
    mast:  {
      __typename: "S3Object",
      bucket: string,
      keyName: string,
      region: string,
      mimeType: string | null,
      fileName: string | null,
    },
    date: string | null,
  },
};

export type FetchMyUserMastQuery = {
  fetchMyUserMast:  {
    __typename: "UserMastHost",
    companyID: string,
    hostUserID: string,
    email: string | null,
  },
};
