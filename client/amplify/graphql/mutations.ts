/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addCompanyMast = /* GraphQL */ `
  mutation AddCompanyMast(
    $input: CompanyMastInput!
    $action: MutationFunctionNameHost!
  ) {
    addCompanyMast(input: $input, action: $action) {
      resourceType
      companyID
      name
      email
    }
  }
`;
export const updateCompanyMast = /* GraphQL */ `
  mutation UpdateCompanyMast(
    $input: CompanyMastInput!
    $action: MutationFunctionNameHost!
  ) {
    updateCompanyMast(input: $input, action: $action) {
      resourceType
      companyID
      name
      email
    }
  }
`;
export const addShopMast = /* GraphQL */ `
  mutation AddShopMast(
    $input: ShopMastInput!
    $action: MutationFunctionNameHost!
  ) {
    addShopMast(input: $input, action: $action) {
      resourceType
      companyID
      shopID
      inSale
      name
      keyVisual {
        bucket
        keyName
        region
        mimeType
        fileName
      }
      keyVisuals {
        bucket
        keyName
        region
        mimeType
        fileName
      }
      twitterURL
      instagramURL
      facebookURL
      address {
        nationality
        postalCode
        state
        pref
        city
        town
        other
      }
      email
      tel
      logoImage {
        bucket
        keyName
        region
        mimeType
        fileName
      }
      aboutUsText
      catchCopy
      statement
      createdAt
      updatedAt
    }
  }
`;
export const updateShopMast = /* GraphQL */ `
  mutation UpdateShopMast(
    $input: ShopMastInput!
    $action: MutationFunctionNameHost!
  ) {
    updateShopMast(input: $input, action: $action) {
      resourceType
      companyID
      shopID
      inSale
      name
      keyVisual {
        bucket
        keyName
        region
        mimeType
        fileName
      }
      keyVisuals {
        bucket
        keyName
        region
        mimeType
        fileName
      }
      twitterURL
      instagramURL
      facebookURL
      address {
        nationality
        postalCode
        state
        pref
        city
        town
        other
      }
      email
      tel
      logoImage {
        bucket
        keyName
        region
        mimeType
        fileName
      }
      aboutUsText
      catchCopy
      statement
      createdAt
      updatedAt
    }
  }
`;
export const addPlanMast = /* GraphQL */ `
  mutation AddPlanMast(
    $input: PlanMastInput!
    $action: MutationFunctionNameHost!
  ) {
    addPlanMast(input: $input, action: $action) {
      resourceType
      shopID
      planID
      name
      catchCopy
      explain
      mainKeyVisual {
        bucket
        keyName
        region
        mimeType
        fileName
      }
      keyVisuals {
        bucket
        keyName
        region
        mimeType
        fileName
      }
      availableDayOfTheWeek
      address {
        nationality
        postalCode
        state
        pref
        city
        town
        other
      }
      inSale
      sortNum
      price {
        currencyType
        amount
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
export const updatePlanMast = /* GraphQL */ `
  mutation UpdatePlanMast(
    $input: PlanMastInput!
    $action: MutationFunctionNameHost!
  ) {
    updatePlanMast(input: $input, action: $action) {
      resourceType
      shopID
      planID
      name
      catchCopy
      explain
      mainKeyVisual {
        bucket
        keyName
        region
        mimeType
        fileName
      }
      keyVisuals {
        bucket
        keyName
        region
        mimeType
        fileName
      }
      availableDayOfTheWeek
      address {
        nationality
        postalCode
        state
        pref
        city
        town
        other
      }
      inSale
      sortNum
      price {
        currencyType
        amount
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
export const deletePlanMast = /* GraphQL */ `
  mutation DeletePlanMast(
    $input: PlanMastInput!
    $action: MutationFunctionNameHost!
  ) {
    deletePlanMast(input: $input, action: $action) {
      resourceType
      shopID
      planID
      name
      catchCopy
      explain
      mainKeyVisual {
        bucket
        keyName
        region
        mimeType
        fileName
      }
      keyVisuals {
        bucket
        keyName
        region
        mimeType
        fileName
      }
      availableDayOfTheWeek
      address {
        nationality
        postalCode
        state
        pref
        city
        town
        other
      }
      inSale
      sortNum
      price {
        currencyType
        amount
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
export const addPlanTimelyStatusByShopIdAndPlanIdAndData = /* GraphQL */ `
  mutation AddPlanTimelyStatusByShopIdAndPlanIdAndData(
    $input: [PlanTimelyStatusInput]!
    $action: MutationFunctionNameHost!
  ) {
    addPlanTimelyStatusByShopIDAndPlanIDAndData(
      input: $input
      action: $action
    ) {
      shopID
      planID
      resourceID
      dateTimeStart
      dateTimeEnd
      stockNum
      soldNum
      availableNum
      isAvailable
    }
  }
`;
export const updatePlanTimelyStatusByShopIdAndPlanIdAndData = /* GraphQL */ `
  mutation UpdatePlanTimelyStatusByShopIdAndPlanIdAndData(
    $input: StatusUpdateInput!
    $action: MutationFunctionNameHost!
  ) {
    updatePlanTimelyStatusByShopIDAndPlanIDAndData(
      input: $input
      action: $action
    ) {
      shopID
      planID
      resourceID
      dateTimeStart
      dateTimeEnd
      stockNum
      soldNum
      availableNum
      isAvailable
    }
  }
`;
