import Vue from 'vue'
import { wrapFunctional } from './index'

const components = {
  Logo: () => import('../../client/components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  AtomsBadgeAppBadgeQuestion: () => import('../../client/components/Atoms/Badge/AppBadgeQuestion.vue' /* webpackChunkName: "components/atoms-badge-app-badge-question" */).then(c => wrapFunctional(c.default || c)),
  AtomsBadgeAppBadgeReservationStatus: () => import('../../client/components/Atoms/Badge/AppBadgeReservationStatus.vue' /* webpackChunkName: "components/atoms-badge-app-badge-reservation-status" */).then(c => wrapFunctional(c.default || c)),
  AtomsBadgeAppBadgeSaleStatus: () => import('../../client/components/Atoms/Badge/AppBadgeSaleStatus.vue' /* webpackChunkName: "components/atoms-badge-app-badge-sale-status" */).then(c => wrapFunctional(c.default || c)),
  AtomsButtonAppButton: () => import('../../client/components/Atoms/Button/AppButton.vue' /* webpackChunkName: "components/atoms-button-app-button" */).then(c => wrapFunctional(c.default || c)),
  AtomsButtonAppButtonAdd: () => import('../../client/components/Atoms/Button/AppButtonAdd.vue' /* webpackChunkName: "components/atoms-button-app-button-add" */).then(c => wrapFunctional(c.default || c)),
  AtomsButtonAppButtonDelete: () => import('../../client/components/Atoms/Button/AppButtonDelete.vue' /* webpackChunkName: "components/atoms-button-app-button-delete" */).then(c => wrapFunctional(c.default || c)),
  AtomsButtonAppButtonHamburgar: () => import('../../client/components/Atoms/Button/AppButtonHamburgar.vue' /* webpackChunkName: "components/atoms-button-app-button-hamburgar" */).then(c => wrapFunctional(c.default || c)),
  AtomsButtonAppButtonInfo: () => import('../../client/components/Atoms/Button/AppButtonInfo.vue' /* webpackChunkName: "components/atoms-button-app-button-info" */).then(c => wrapFunctional(c.default || c)),
  AtomsButtonAppButtonMinus: () => import('../../client/components/Atoms/Button/AppButtonMinus.vue' /* webpackChunkName: "components/atoms-button-app-button-minus" */).then(c => wrapFunctional(c.default || c)),
  AtomsButtonAppButtonNavigation: () => import('../../client/components/Atoms/Button/AppButtonNavigation.vue' /* webpackChunkName: "components/atoms-button-app-button-navigation" */).then(c => wrapFunctional(c.default || c)),
  AtomsButtonAppButtonPlus: () => import('../../client/components/Atoms/Button/AppButtonPlus.vue' /* webpackChunkName: "components/atoms-button-app-button-plus" */).then(c => wrapFunctional(c.default || c)),
  AtomsButtonAppButtonSave: () => import('../../client/components/Atoms/Button/AppButtonSave.vue' /* webpackChunkName: "components/atoms-button-app-button-save" */).then(c => wrapFunctional(c.default || c)),
  AtomsButtonAppButtonTable: () => import('../../client/components/Atoms/Button/AppButtonTable.vue' /* webpackChunkName: "components/atoms-button-app-button-table" */).then(c => wrapFunctional(c.default || c)),
  AtomsButtonAppButtonTransition: () => import('../../client/components/Atoms/Button/AppButtonTransition.vue' /* webpackChunkName: "components/atoms-button-app-button-transition" */).then(c => wrapFunctional(c.default || c)),
  AtomsButtonLargeButton: () => import('../../client/components/Atoms/Button/LargeButton.vue' /* webpackChunkName: "components/atoms-button-large-button" */).then(c => wrapFunctional(c.default || c)),
  AtomsButtonMediumButton: () => import('../../client/components/Atoms/Button/MediumButton.vue' /* webpackChunkName: "components/atoms-button-medium-button" */).then(c => wrapFunctional(c.default || c)),
  AtomsButtonSmallButton: () => import('../../client/components/Atoms/Button/SmallButton.vue' /* webpackChunkName: "components/atoms-button-small-button" */).then(c => wrapFunctional(c.default || c)),
  AtomsInputAppInput: () => import('../../client/components/Atoms/Input/AppInput.vue' /* webpackChunkName: "components/atoms-input-app-input" */).then(c => wrapFunctional(c.default || c)),
  AtomsInputAppInputDisplayNone: () => import('../../client/components/Atoms/Input/AppInputDisplayNone.vue' /* webpackChunkName: "components/atoms-input-app-input-display-none" */).then(c => wrapFunctional(c.default || c)),
  AtomsInputAppInputGuestInfo: () => import('../../client/components/Atoms/Input/AppInputGuestInfo.vue' /* webpackChunkName: "components/atoms-input-app-input-guest-info" */).then(c => wrapFunctional(c.default || c)),
  AtomsInputAppInputNumber: () => import('../../client/components/Atoms/Input/AppInputNumber.vue' /* webpackChunkName: "components/atoms-input-app-input-number" */).then(c => wrapFunctional(c.default || c)),
  AtomsInputAppInputPassword: () => import('../../client/components/Atoms/Input/AppInputPassword.vue' /* webpackChunkName: "components/atoms-input-app-input-password" */).then(c => wrapFunctional(c.default || c)),
  AtomsInputAppInputTextarea: () => import('../../client/components/Atoms/Input/AppInputTextarea.vue' /* webpackChunkName: "components/atoms-input-app-input-textarea" */).then(c => wrapFunctional(c.default || c)),
  AtomsInputAppInputToggle: () => import('../../client/components/Atoms/Input/AppInputToggle.vue' /* webpackChunkName: "components/atoms-input-app-input-toggle" */).then(c => wrapFunctional(c.default || c)),
  AtomsInputAppInputUnderBar: () => import('../../client/components/Atoms/Input/AppInputUnderBar.vue' /* webpackChunkName: "components/atoms-input-app-input-under-bar" */).then(c => wrapFunctional(c.default || c)),
  AtomsTextAppTextH1: () => import('../../client/components/Atoms/Text/AppTextH1.vue' /* webpackChunkName: "components/atoms-text-app-text-h1" */).then(c => wrapFunctional(c.default || c)),
  AtomsTextAppTextH2: () => import('../../client/components/Atoms/Text/AppTextH2.vue' /* webpackChunkName: "components/atoms-text-app-text-h2" */).then(c => wrapFunctional(c.default || c)),
  AtomsTextAppTextH3: () => import('../../client/components/Atoms/Text/AppTextH3.vue' /* webpackChunkName: "components/atoms-text-app-text-h3" */).then(c => wrapFunctional(c.default || c)),
  AtomsTextAppTextH4: () => import('../../client/components/Atoms/Text/AppTextH4.vue' /* webpackChunkName: "components/atoms-text-app-text-h4" */).then(c => wrapFunctional(c.default || c)),
  AtomsTextAppTextH5: () => import('../../client/components/Atoms/Text/AppTextH5.vue' /* webpackChunkName: "components/atoms-text-app-text-h5" */).then(c => wrapFunctional(c.default || c)),
  MoleculesAppImageItem: () => import('../../client/components/Molecules/AppImageUpload/ImageItem.vue' /* webpackChunkName: "components/molecules-app-image-item" */).then(c => wrapFunctional(c.default || c)),
  MoleculesAppImageUploadMultipleImage: () => import('../../client/components/Molecules/AppImageUpload/MultipleImage.vue' /* webpackChunkName: "components/molecules-app-image-upload-multiple-image" */).then(c => wrapFunctional(c.default || c)),
  MoleculesAppImageUploadSingleImage: () => import('../../client/components/Molecules/AppImageUpload/SingleImage.vue' /* webpackChunkName: "components/molecules-app-image-upload-single-image" */).then(c => wrapFunctional(c.default || c)),
  MoleculesAppSelectBoxList: () => import('../../client/components/Molecules/AppSelectBox/List.vue' /* webpackChunkName: "components/molecules-app-select-box-list" */).then(c => wrapFunctional(c.default || c)),
  MoleculesAppSelectBoxListForCardInput: () => import('../../client/components/Molecules/AppSelectBox/ListForCardInput.vue' /* webpackChunkName: "components/molecules-app-select-box-list-for-card-input" */).then(c => wrapFunctional(c.default || c)),
  MoleculesAppSelectBoxListItem: () => import('../../client/components/Molecules/AppSelectBox/ListItem.vue' /* webpackChunkName: "components/molecules-app-select-box-list-item" */).then(c => wrapFunctional(c.default || c)),
  OrganismsEventReadCalendar: () => import('../../client/components/Organisms/Event/ReadCalendar.vue' /* webpackChunkName: "components/organisms-event-read-calendar" */).then(c => wrapFunctional(c.default || c)),
  OrganismsItemsEditTemplate: () => import('../../client/components/Organisms/Items/EditTemplate.vue' /* webpackChunkName: "components/organisms-items-edit-template" */).then(c => wrapFunctional(c.default || c)),
  OrganismsNotifyAppAuthMail: () => import('../../client/components/Organisms/Notify/AppAuthMail.vue' /* webpackChunkName: "components/organisms-notify-app-auth-mail" */).then(c => wrapFunctional(c.default || c)),
  OrganismsNotifyAppAuthMailPolite: () => import('../../client/components/Organisms/Notify/AppAuthMailPolite.vue' /* webpackChunkName: "components/organisms-notify-app-auth-mail-polite" */).then(c => wrapFunctional(c.default || c)),
  OrganismsQuestionsQuestionTemplate: () => import('../../client/components/Organisms/Questions/QuestionTemplate.vue' /* webpackChunkName: "components/organisms-questions-question-template" */).then(c => wrapFunctional(c.default || c)),
  OrganismsTablePlanList: () => import('../../client/components/Organisms/TablePlan/PlanList.vue' /* webpackChunkName: "components/organisms-table-plan-list" */).then(c => wrapFunctional(c.default || c)),
  OrganismsTablePlanListItem: () => import('../../client/components/Organisms/TablePlan/PlanListItem.vue' /* webpackChunkName: "components/organisms-table-plan-list-item" */).then(c => wrapFunctional(c.default || c)),
  OrganismsTableShopList: () => import('../../client/components/Organisms/TableShop/List.vue' /* webpackChunkName: "components/organisms-table-shop-list" */).then(c => wrapFunctional(c.default || c)),
  OrganismsTableShopListItem: () => import('../../client/components/Organisms/TableShop/ListItem.vue' /* webpackChunkName: "components/organisms-table-shop-list-item" */).then(c => wrapFunctional(c.default || c)),
  TemplatesAuthErrorNotice: () => import('../../client/components/Templates/Auth/ErrorNotice.vue' /* webpackChunkName: "components/templates-auth-error-notice" */).then(c => wrapFunctional(c.default || c)),
  TemplatesAuthForgotPassword: () => import('../../client/components/Templates/Auth/ForgotPassword.vue' /* webpackChunkName: "components/templates-auth-forgot-password" */).then(c => wrapFunctional(c.default || c)),
  TemplatesAuthInvitationSignUpForm: () => import('../../client/components/Templates/Auth/InvitationSignUpForm.vue' /* webpackChunkName: "components/templates-auth-invitation-sign-up-form" */).then(c => wrapFunctional(c.default || c)),
  TemplatesAuthResetPassword: () => import('../../client/components/Templates/Auth/ResetPassword.vue' /* webpackChunkName: "components/templates-auth-reset-password" */).then(c => wrapFunctional(c.default || c)),
  TemplatesAuthSignInForm: () => import('../../client/components/Templates/Auth/SignInForm.vue' /* webpackChunkName: "components/templates-auth-sign-in-form" */).then(c => wrapFunctional(c.default || c)),
  TemplatesAuthSignUpForm: () => import('../../client/components/Templates/Auth/SignUpForm.vue' /* webpackChunkName: "components/templates-auth-sign-up-form" */).then(c => wrapFunctional(c.default || c)),
  TemplatesCommonHeader: () => import('../../client/components/Templates/Common/header.vue' /* webpackChunkName: "components/templates-common-header" */).then(c => wrapFunctional(c.default || c)),
  OrganismsCommonNotificationHandlerListItem: () => import('../../client/components/Organisms/Common/NotificationHandler/ListItem.vue' /* webpackChunkName: "components/organisms-common-notification-handler-list-item" */).then(c => wrapFunctional(c.default || c)),
  OrganismsCommonNotificationHandler: () => import('../../client/components/Organisms/Common/NotificationHandler/index.vue' /* webpackChunkName: "components/organisms-common-notification-handler" */).then(c => wrapFunctional(c.default || c)),
  OrganismsCommonHeaderMenuItem: () => import('../../client/components/Organisms/Common/header/MenuItem.vue' /* webpackChunkName: "components/organisms-common-header-menu-item" */).then(c => wrapFunctional(c.default || c)),
  OrganismsEventPartsClickDateEach: () => import('../../client/components/Organisms/Event/Parts/ClickDateEach.vue' /* webpackChunkName: "components/organisms-event-parts-click-date-each" */).then(c => wrapFunctional(c.default || c)),
  OrganismsEventPartsReadCalendarTemplate: () => import('../../client/components/Organisms/Event/Parts/ReadCalendarTemplate.vue' /* webpackChunkName: "components/organisms-event-parts-read-calendar-template" */).then(c => wrapFunctional(c.default || c)),
  OrganismsEventPartsReadWeekDays: () => import('../../client/components/Organisms/Event/Parts/ReadWeekDays.vue' /* webpackChunkName: "components/organisms-event-parts-read-week-days" */).then(c => wrapFunctional(c.default || c)),
  OrganismsQuestionsQuestionAddressInput: () => import('../../client/components/Organisms/Questions/QuestionAddressInput/QuestionAddressInput.vue' /* webpackChunkName: "components/organisms-questions-question-address-input" */).then(c => wrapFunctional(c.default || c)),
  OrganismsQuestionsQuestionColorInput: () => import('../../client/components/Organisms/Questions/QuestionColorInput/QuestionColorInput.vue' /* webpackChunkName: "components/organisms-questions-question-color-input" */).then(c => wrapFunctional(c.default || c)),
  OrganismsQuestionsQuestionImageSingle: () => import('../../client/components/Organisms/Questions/QuestionImageSingle/QuestionImageSingle.vue' /* webpackChunkName: "components/organisms-questions-question-image-single" */).then(c => wrapFunctional(c.default || c)),
  OrganismsQuestionsQuestionImageMulti: () => import('../../client/components/Organisms/Questions/QuestionImageMulti/QuestionImageMulti.vue' /* webpackChunkName: "components/organisms-questions-question-image-multi" */).then(c => wrapFunctional(c.default || c)),
  OrganismsQuestionsQuestionInput: () => import('../../client/components/Organisms/Questions/QuestionInput/QuestionInput.vue' /* webpackChunkName: "components/organisms-questions-question-input" */).then(c => wrapFunctional(c.default || c)),
  OrganismsQuestionsQuestionNumber: () => import('../../client/components/Organisms/Questions/QuestionNumberInput/QuestionNumber.vue' /* webpackChunkName: "components/organisms-questions-question-number" */).then(c => wrapFunctional(c.default || c)),
  OrganismsQuestionsQuestionSnsInput: () => import('../../client/components/Organisms/Questions/QuestionSnsInput/QuestionSnsInput.vue' /* webpackChunkName: "components/organisms-questions-question-sns-input" */).then(c => wrapFunctional(c.default || c)),
  OrganismsQuestionsQuestionToggle: () => import('../../client/components/Organisms/Questions/QuestionToggle/QuestionToggle.vue' /* webpackChunkName: "components/organisms-questions-question-toggle" */).then(c => wrapFunctional(c.default || c)),
  OrganismsQuestionsQuestionTextarea: () => import('../../client/components/Organisms/Questions/QuestionTextarea/QuestionTextarea.vue' /* webpackChunkName: "components/organisms-questions-question-textarea" */).then(c => wrapFunctional(c.default || c)),
  TemplatesItemsEventCalendar: () => import('../../client/components/Templates/Items/Event/Calendar.vue' /* webpackChunkName: "components/templates-items-event-calendar" */).then(c => wrapFunctional(c.default || c)),
  TemplatesItemsPlanEditPlan: () => import('../../client/components/Templates/Items/Plan/EditPlan.vue' /* webpackChunkName: "components/templates-items-plan-edit-plan" */).then(c => wrapFunctional(c.default || c)),
  TemplatesItemsPlanListPlan: () => import('../../client/components/Templates/Items/Plan/ListPlan.vue' /* webpackChunkName: "components/templates-items-plan-list-plan" */).then(c => wrapFunctional(c.default || c)),
  TemplatesItemsShopEditShop: () => import('../../client/components/Templates/Items/Shop/EditShop.vue' /* webpackChunkName: "components/templates-items-shop-edit-shop" */).then(c => wrapFunctional(c.default || c)),
  OrganismsEventItem: () => import('../../client/components/Organisms/Event/Parts/Parts/EventItem.vue' /* webpackChunkName: "components/organisms-event-item" */).then(c => wrapFunctional(c.default || c)),
  OrganismsEventPartsPartsAddEvent: () => import('../../client/components/Organisms/Event/Parts/Parts/addEvent.vue' /* webpackChunkName: "components/organisms-event-parts-parts-add-event" */).then(c => wrapFunctional(c.default || c)),
  OrganismsEventPartsPartsUpdateEvent: () => import('../../client/components/Organisms/Event/Parts/Parts/updateEvent.vue' /* webpackChunkName: "components/organisms-event-parts-parts-update-event" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
