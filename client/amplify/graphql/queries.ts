/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const fetchCompanyByCompanyId = /* GraphQL */ `
  query FetchCompanyByCompanyId($companyID: ID!) {
    fetchCompanyByCompanyID(companyID: $companyID) {
      resourceType
      companyID
      mast {
        bucket
        keyName
        region
        mimeType
        fileName
      }
    }
  }
`;
export const fetchShopsByCompanyId = /* GraphQL */ `
  query FetchShopsByCompanyId($companyID: ID!) {
    fetchShopsByCompanyID(companyID: $companyID) {
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
      catchCopy
      createdAt
      updatedAt
    }
  }
`;
export const fetchShopMastByShopId = /* GraphQL */ `
  query FetchShopMastByShopId($shopID: ID!) {
    fetchShopMastByShopID(shopID: $shopID) {
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
      catchCopy
      createdAt
      updatedAt
    }
  }
`;
export const fetchPlanMastsByShopId = /* GraphQL */ `
  query FetchPlanMastsByShopId($shopID: ID!) {
    fetchPlanMastsByShopID(shopID: $shopID) {
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
export const fetchPlanMastByShopIdAndPlanId = /* GraphQL */ `
  query FetchPlanMastByShopIdAndPlanId($shopID: ID!, $planID: ID!) {
    fetchPlanMastByShopIDAndPlanID(shopID: $shopID, planID: $planID) {
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
export const fetchPlanDailyStatusByShopIdAndStartAndEnd = /* GraphQL */ `
  query FetchPlanDailyStatusByShopIdAndStartAndEnd(
    $shopID: ID!
    $startDtTime: AWSDateTime!
    $endDtTime: AWSDateTime!
  ) {
    fetchPlanDailyStatusByShopIDAndStartAndEnd(
      shopID: $shopID
      startDtTime: $startDtTime
      endDtTime: $endDtTime
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
export const fetchPlanTimelyStatusByShopIdAndResourceId = /* GraphQL */ `
  query FetchPlanTimelyStatusByShopIdAndResourceId(
    $shopID: ID!
    $resourceID: ID!
  ) {
    fetchPlanTimelyStatusByShopIDAndResourceID(
      shopID: $shopID
      resourceID: $resourceID
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
export const fetchReservationObjectByShopIdAndReservationId = /* GraphQL */ `
  query FetchReservationObjectByShopIdAndReservationId(
    $shopID: ID!
    $reservationID: ID!
  ) {
    fetchReservationObjectByShopIDAndReservationID(
      shopID: $shopID
      reservationID: $reservationID
    ) {
      shopID
      reservationID
      mast {
        bucket
        keyName
        region
        mimeType
        fileName
      }
      date
    }
  }
`;
export const fetchMyUserMast = /* GraphQL */ `
  query FetchMyUserMast {
    fetchMyUserMast {
      companyID
      hostUserID
      email
    }
  }
`;
