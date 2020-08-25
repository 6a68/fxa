'use strict';

const PASSWORD_BALLOON = {
  BALLOON: '.password-strength-balloon',
  MIN_LENGTH_FAIL: '.min-length.fail',
  MIN_LENGTH_MET: '.min-length.met',
  MIN_LENGTH_UNMET: '.min-length.unmet',
  NOT_COMMON_FAIL: '.not-common.fail',
  NOT_COMMON_MET: '.not-common.met',
  NOT_COMMON_UNMET: '.not-common.unmet',
  NOT_EMAIL_FAIL: '.not-email.fail',
  NOT_EMAIL_MET: '.not-email.met',
  NOT_EMAIL_UNMET: '.not-email.unmet',
};

const NEWSLETTERS = {
  CONSUMER_BETA: 'input[value="test-pilot"]',
  FIREFOX_ACCOUNTS_JOURNEY: 'input[value="firefox-accounts-journey"]',
  HEALTHY_INTERNET: 'input[value="take-action-for-the-internet"]',
  ONLINE_SAFETY: 'input[value="knowledge-is-power"]',
};

const CWTS_ENGINES = {
  ENGINE_ADDONS: '#sync-engine-addons',
  ENGINE_ADDRESSES: '#sync-engine-addresses',
  ENGINE_BOOKMARKS: '#sync-engine-bookmarks',
  ENGINE_CREDIT_CARDS: '#sync-engine-creditcards',
  ENGINE_HISTORY: '#sync-engine-history',
  ENGINE_PASSWORDS: '#sync-engine-passwords',
  ENGINE_PREFS: '#sync-engine-prefs',
  ENGINE_TABS: '#sync-engine-tabs',
};

/*eslint-disable max-len*/
module.exports = {
  '123DONE': {
    AUTHENTICATED: '#loggedin',
    AUTHENTICATED_TOTP: '#loggedin span:first-child',
    BUTTON_SIGNIN: '.sign-in-button.signin',
    BUTTON_SIGNIN_CHOOSE_FLOW_FOR_ME: '.ready .sign-choose',
    BUTTON_PROMPT_NONE: '.ready .prompt-none',
    BUTTON_SIGNUP: '.sign-in-button.signup',
    LINK_LOGOUT: '#logout',
    BUTTON_SUBSCRIBE:
      '.subscription-buttons .btn-subscribe[data-currency="usd"]',
    SUBSCRIBED: '.pro-status',
  },
  '400': {
    ERROR: '.error',
    HEADER: '#fxa-400-header',
  },
  '404': {
    HEADER: '#fxa-404-header',
    LINK_HOME: '#fxa-404-home',
  },
  '500': {
    HEADER: '#fxa-500-header',
    LINK_HOME: '#fxa-500-home',
  },
  CHANGE_PASSWORD: {
    CANCEL_BUTTON: '#change-password .cancel',
    DETAILS: '#change-password .settings-unit-details',
    ERROR: '#change-password .error',
    LINK_RESET_PASSWORD: '.reset-password',
    MENU_BUTTON: '#change-password .settings-unit-toggle',
    NEW_PASSWORD: '#new_password',
    NEW_VPASSWORD: '#new_vpassword',
    OLD_PASSWORD: '#old_password',
    OLD_PASSWORD_SHOW: '[for=show-old_password]',
    PASSWORD_BALLOON,
    SUBMIT: '#change-password button[type="submit"]',
    TOOLTIP: '.tooltip',
  },
  CHOOSE_WHAT_TO_SYNC: {
    DO_NOT_SYNC: '#do-not-sync-device',
    HEADER: '#fxa-choose-what-to-sync-header',
    NEWSLETTERS,
    NEWSLETTERS_HEADER: '.get-involved',
    SUBMIT: 'button[type=submit]',
    ...CWTS_ENGINES,
  },
  COMPLETE_RESET_PASSWORD: {
    DAMAGED_LINK_HEADER: '#fxa-reset-link-damaged-header',
    EXPIRED_LINK_HEADER: '#fxa-reset-link-expired-header',
    HEADER: '#fxa-complete-reset-password-header',
    PASSWORD: '#password',
    PASSWORD_BALLOON,
    SUBMIT: 'button[type="submit"]',
    VPASSWORD: '#vpassword',
  },
  COMPLETE_RESET_PASSWORD_RECOVERY_KEY: {
    HEADER: '#fxa-recovery-key-confirm',
    INPUT: '#recovery-key',
    LOST_KEY: '.lost-recovery-key',
    SUBMIT: 'button[type="submit"]',
    TOOLTIP: '.tooltip',
  },
  COMPLETE_SIGNIN: {
    LINK_RESEND: '#resend',
    VERIFICATION_LINK_DAMAGED: '#fxa-verification-link-damaged-header',
    VERIFICATION_LINK_EXPIRED: '#fxa-verification-link-expired-header',
    VERIFICATION_LINK_REUSED: '#fxa-verification-link-reused-header',
  },
  COMPLETE_SIGNUP: {
    LINK_RESEND: '#resend',
    RESEND_SUCCESS: '.success',
    VERIFICATION_LINK_DAMAGED: '#fxa-verification-link-damaged-header',
    VERIFICATION_LINK_EXPIRED: '#fxa-verification-link-expired-header',
    VERIFICATION_LINK_REUSED: '#fxa-verification-link-reused-header',
  },
  CONFIRM_RESET_PASSWORD: {
    HEADER: '#fxa-confirm-reset-password-header',
    LINK_RESEND: '#resend',
    LINK_SIGNIN: '.sign-in',
    RESEND_SUCCESS: '.success',
  },
  CONFIRM_SIGNIN: {
    HEADER: '#fxa-confirm-signin-header',
    LINK_BACK: '#back',
    LINK_RESEND: '#resend',
    RESEND_SUCCESS: '.success',
  },
  CONFIRM_SIGNUP: {
    EMAIL_MESSAGE: '.verification-email-message',
    HEADER: '#fxa-confirm-header',
    LINK_BACK: '#back',
    LINK_OPEN_WEBMAIL: '#open-webmail',
    LINK_RESEND: '#resend',
  },
  CONFIRM_SIGNUP_CODE: {
    HEADER: '#fxa-confirm-signup-code-header',
    EMAIL_FIELD: '.verification-email-message',
    INPUT: '.otp-code',
    LINK_BACK: '#back',
    LINK_RESEND: '#resend',
  },
  CONNECT_ANOTHER_DEVICE: {
    HEADER: '#fxa-connect-another-device-header',
    LINK_INSTALL_ANDROID: '.marketing-link-android',
    LINK_INSTALL_IOS: '.marketing-link-ios',
    LINK_WHY_IS_THIS_REQUIRED: 'a[href="/connect_another_device/why"]',
    SIGNIN_BUTTON: 'form div a',
    SUCCESS: '.success',
    SUCCESS_DIFFERENT_BROWSER: '.success-not-authenticated',
    SUCCESS_SAME_BROWSER: '.success-authenticated',
    TEXT_INSTALL_FROM_OTHER: '#install-mobile-firefox-other',
    TEXT_INSTALL_FX_ANDROID: '#install-mobile-firefox-android',
    TEXT_INSTALL_FX_DESKTOP: '#install-mobile-firefox-desktop',
    TEXT_INSTALL_FX_FROM_FX_ANDROID: '#connect-other-firefox-from-android',
    TEXT_INSTALL_FX_IOS: '#install-mobile-firefox-ios',
    TEXT_SIGNIN_FXIOS: '#signin-fxios',
  },
  CONNECT_ANOTHER_DEVICE_WHY_IS_THIS_REQUIRED: {
    CLOSE: '.connect-another-device button[type="submit"]',
    HEADER: '#fxa-why-connect-another-device-header',
  },
  COOKIES_DISABLED: {
    HEADER: '#fxa-cookies-disabled-header',
    RETRY: '#submit-btn',
  },
  COPPA: {
    HEADER: '#fxa-cannot-create-account-header',
  },
  DOWNLOAD_FIREFOX_THANKS: {
    HEADER: '#download-button-wrapper-desktop',
  },
  EMAIL: {
    ADD_BUTTON: '.email-add:not(.disabled)',
    ADDRESS_LABEL: '.address',
    INPUT: '.new-email',
    MENU_BUTTON: '.emails .settings-unit-toggle',
    EMAIL_GROUP: '.email-address',
    NOT_VERIFIED_LABEL: '.not-verified',
    REMOVE_BUTTON:
      '.email-address-row .settings-button.warning-button.email-disconnect',
    SET_PRIMARY_EMAIL_BUTTON: '.email-address-row .set-primary',
    SUCCESS: '.success',
    TOOLTIP: '.tooltip',
    UNLOCK_BUTTON: '.emails .unlock-button',
    UNLOCK_REFRESH_BUTTON: '.emails .refresh-verification-state',
    UNLOCK_SEND_BUTTON: '.emails .send-verification-email',
    VERIFIED_LABEL: '.verified',
    ADD_ADDITIONAL_BUTTON: '.email-add-another',
  },
  ENTER_EMAIL: {
    EMAIL: 'input[type=email]',
    ERROR: '.error',
    FIREFOX_FAMILY_SERVICES: '.firefox-family-services',
    HEADER: '#fxa-enter-email-header',
    LINK_SUGGEST_EMAIL_DOMAIN_CORRECTION: '#email-suggestion',
    LINK_SUGGEST_SYNC: '#suggest-sync a',
    SUB_HEADER: '#fxa-enter-email-header .service',
    SUBMIT: 'button[type="submit"]',
    SUGGEST_EMAIL_DOMAIN_CORRECTION: '.tooltip-suggest',
    TOOLTIP: 'input[type=email] ~ .tooltip',
    TOOLTIP_BOUNCED_EMAIL: 'input[type=email] ~ .tooltip',
  },
  FIREFOX_NOTES: {
    HEADER: '#notes-by-firefox',
  },
  FORCE_AUTH: {
    EMAIL: 'input[type=email]',
    EMAIL_NOT_EDITABLE: '.prefillEmail',
    HEADER: '#fxa-force-auth-header',
    LINK_RESET_PASSWORD: '.reset-password',
    PASSWORD: 'input[type=password]',
    SUB_HEADER: '#fxa-force-auth-header .service',
  },
  INLINE_TOTP: {
    HEADER: '#fxa-inline-totp-setup',
    INTRO_CONTINUE_BUTTON: '.totp-continue',
    CANCEL_BUTTON: '.totp-cancel',
    TOTP_SETUP_HEADER: '#fxa-totp-qr-image',
    QR_IMAGE: '.qr-image',
    SHOW_CODE_LINK: '.show-code-link',
    TOTP_CODE_TEXT: '.qr-code-text',
    SHOW_IMAGE_LINK: '.hide-code-link',
    CONFIRM_CODE_INPUT: '.totp-code',
    READY_BUTTON: '.totp-confirm-code',
  },
  INLINE_RECOVERY_CODES: {
    HEADER: '#fxa-save-recovery-codes',
    RECOVERY_CODES: '#recovery-code-container .recovery-code:first-child',
    COPY_BUTTON: '.copy-option',
    DOWNLOAD_BUTTON: '.download-option',
    PRINT_BUTTON: '.print-option',
    CANCEL_BUTTON: '.recovery-cancel',
    DONE_BUTTON: '.recovery-setup-done',
  },
  INLINE_CONFIRM_RECOVERY: {
    HEADER: '#fxa-confirm-recovery-code',
    RECOVERY_CODE_INPUT: 'input.recovery-code',
    BACK_BUTTON: '.recovery-back',
    CANCEL_BUTTON: '.recovery-cancel',
    CONFIRM_BUTTON: '.recovery-confirm-code',
  },
  MOZILLA_ORG_SYNC: {
    HEADER: '.mzp-c-navigation',
  },
  OAUTH_PERMISSIONS: {
    CHECKBOX_DISPLAY_NAME: 'input[name="profile:display_name"]',
    HEADER: '#fxa-permissions-header',
    SUBMIT: '#accept',
  },
  PRIVACY_POLICY: {
    HEADER: '#fxa-pp-header',
    LINK_BACK: '#fxa-pp-back',
  },
  PAIRING: {
    AUTH_SUBMIT: '#auth-approve-btn',
    COMPLETE: '#fxa-oauth-success-header',
    HEADER: '#pair-header',
    PAIR_FAILURE: '#fxa-pair-failure-header',
    START_PAIRING: '#start-pairing',
    SUPP_SUBMIT: '#supp-approve-btn',
  },
  PAYMENTS: {
    HEADER: '.accepted-cards',
  },
  POST_VERIFY_ADD_SECONDARY_EMAIL: {
    EMAIL: 'input[type=email]',
    ERROR: '.error',
    HEADER: '#fxa-add-secondary-email-header',
    SUBMIT: 'button[type="submit"]',
    TOOLTIP: 'input[type=email] ~ .tooltip',
    TOOLTIP_BOUNCED_EMAIL: 'input[type=email] ~ .tooltip',
  },
  POST_VERIFY_CONFIRM_SECONDARY_EMAIL: {
    INPUT: 'input[type=text]',
    ERROR: '.error',
    HEADER: '#fxa-confirm-secondary-email-header',
    RESEND: '#resend',
    SUBMIT: 'button[type="submit"]',
    TOOLTIP: 'input[type=text] ~ .tooltip',
    USE_DIFFERENT_EMAIL: '#use-different-email',
  },
  POST_VERIFY_VERIFIED: {
    READY: '.account-ready-service',
    SUBMIT: 'button[type="submit"]',
  },
  POST_VERIFY_ADD_RECOVERY_KEY: {
    ERROR: '.error',
    HEADER: '#fxa-add-account-recovery-header',
    MAYBE_LATER: '#maybe-later-btn',
    SUBMIT: 'button[type="submit"]',
  },
  POST_VERIFY_CONFIRM_PASSWORD: {
    ERROR: '.error',
    HEADER: '#fxa-confirm-password-header',
    PASSWORD: 'input[type=password]',
    SUBMIT: 'button[type="submit"]',
    TOOLTIP: 'input[type=password] ~ .tooltip',
    MAYBE_LATER: '#maybe-later-btn',
  },
  POST_VERIFY_SAVE_RECOVERY_KEY: {
    ERROR: '.error',
    HEADER: '#fxa-save-recovery-key-header',
    RECOVERY_KEY: '.recovery-key',
    DONE: '.primary-button',
  },
  POST_VERIFY_CONFIRM_RECOVERY_KEY: {
    ERROR: '.error',
    HEADER: '#fxa-confirm-recovery-key-header',
    RECOVERY_KEY: '#recovery-key',
    SUBMIT: 'button[type="submit"]',
    TOOLTIP: '#recovery-key ~ .tooltip',
    BACK: '#back-btn',
  },
  POST_VERIFY_RECOVERY_KEY_VERIFIED: {
    HEADER: '#fxa-account-recovery-complete-header',
    READY: '.account-ready-service',
    SUBMIT: 'button[type="submit"]',
  },
  POST_VERIFY_ADD_NEWSLETTERS: {
    DESCRIPTION: '.description',
    HEADER: '#fxa-add-newsletters-header',
    SUBMIT: 'button[type="submit"]',
    NEWSLETTERS,
  },
  POST_VERIFY_FORCE_PASSWORD_CHANGE: {
    DESCRIPTION: '.description',
    HEADER: '#fxa-force-password-change-header',
    OPASSWORD: '#opassword',
    PASSWORD: '#password',
    VPASSWORD: '#vpassword',
    SUBMIT: 'button[type="submit"]',
  },
  POST_VERIFY_CAD_QR_GET_STARTED: {
    HEADER: '#fxa-cad-qr-get-started-header',
    SUBMIT: 'button[type="submit"]',
    LATER: '#maybe-later-link',
  },
  POST_VERIFY_CAD_QR_READY_TO_SCAN: {
    HEADER: '#fxa-cad-qr-ready-to-scan-header',
    SUBMIT: 'button[type="submit"]',
    LATER: '#maybe-later-link',
    USE_SMS: '#use-sms-link',
  },
  POST_VERIFY_CAD_QR_SCAN_CODE: {
    HEADER: '#fxa-cad-qr-connect-your-mobile-device-header',
    USE_SMS: '#use-sms-link',
  },
  POST_VERIFY_CAD_QR_CONNECTED: {
    HEADER: '#fxa-cad-qr-connected-header',
    SUBMIT: 'button[type="submit"]',
    USE_SMS: '#use-sms-link',
    DONE: '#done-link',
  },
  RECOVERY_KEY: {
    CANCEL_BUTTON: '.cancel',
    CONFIRM_PASSWORD_CONTINUE: '.generate-key-link',
    CONFIRM_REVOKE: '.confirm-revoke',
    CONFIRM_REVOKE_DESCRIPTION: '.revoke-description',
    CONFIRM_REVOKE_OK: '#account-recovery-confirm-revoke .revoke',
    GENERATE_KEY_BUTTON: '.confirm-password',
    MENU_BUTTON: '#account-recovery-section .settings-unit-toggle',
    PASSWORD_INPUT: '#account-recovery-confirm-password #password',
    RECOVERY_KEY_DONE_BUTTON: '.done-link',
    RECOVERY_KEY_TEXT: '.recovery-key',
    STATUS_DISABLED: '.disabled',
    STATUS_ENABLED: '.enabled',
    UNLOCK_BUTTON: '.account-recovery .unlock-button',
    UNLOCK_REFRESH_BUTTON: '.account-recovery .refresh-verification-state',
    UNLOCK_SEND_VERIFY: '.account-recovery .send-verification-email',
  },
  REPORT_SIGNIN: {
    HEADER: '#fxa-report-sign-in-header',
    SUBMIT: 'button[type=submit]',
  },
  RESET_PASSWORD: {
    BACK: '.remember-password',
    EMAIL: 'input[type=email]',
    ERROR: '.error',
    HEADER: '#fxa-reset-password-header',
    LINK_ERROR_SIGNUP: '.error a[href="/signup"]',
    LINK_SIGNIN: '.remember-password',
    SUBMIT: 'button[type="submit"]',
    SUCCESS: '.success',
  },
  RESET_PASSWORD_COMPLETE: {
    HEADER: '#fxa-reset-password-complete-header',
    SUB_HEADER: '.account-ready-service',
  },
  SECURITY_EVENTS: {
    DELETE_EVENTS_BUTTON: '#delete-events',
    FIRST_EVENT_NAME: '#security-events-table tr:first-child .event-name',
    RECENT_ACTIVITY_HEADER: '#recent-activity-header',
    SECURITY_EVENT: '.security-event',
    SECURITY_EVENTS_HEADER: '#security-events',
  },
  SETTINGS: {
    CONTENT: '#fxa-settings-content',
    HEADER: '#fxa-settings-header',
    PROFILE_HEADER: '#fxa-settings-profile-header .card-header',
    PROFILE_SUB_HEADER: '#fxa-settings-profile-header .card-subheader',
    SIGNOUT: '#signout',
    SUB_PANELS: '#sub-panels',
    SUCCESS: '.settings-success',
  },
  SETTINGS_AVATAR: {
    AVATAR: '.change-avatar > .change-avatar-inner',
    BACK: '.modal-panel #back',
    BUTTON_CAMERA: '#camera',
    BUTTON_ROTATE: '.rotate',
    BUTTON_ZOOM_IN: '.zoom-in',
    BUTTON_ZOOM_OUT: '.zoom-out',
    CAMERA_HEADER: '#avatar-camera',
    CHANGE_HEADER: '#avatar-options',
    CROPPER_HEADER: '.cropper',
    HEADER: '#avatar-change',
    MENU_BUTTON: '#change-avatar .settings-unit-toggle',
    SUBMIT: '.modal-panel #submit-btn',
    UPLOAD_FILENAME_INPUT: '#imageLoader',
  },
  SETTINGS_CLIENTS: {
    BUTTON_REFRESH: '.clients-refresh',
    BUTTON_REFRESH_LOADING: '.clients-refresh .spinner',
    CLIENT_LIST: '.client-list',
    MENU_BUTTON: '#clients .settings-unit-toggle',
    OAUTH_CLIENT: 'li.client-oAuthApp',
    REFRESHING: '.clients-refresh.disabled',
  },
  SETTINGS_COMMUNICATION: {
    BUTTON_MANAGE: '.open-email-preferences',
  },
  SETTINGS_DELETE_ACCOUNT: {
    CANCEL: '#delete-account .cancel',
    DETAILS: '#delete-account .settings-unit-details',
    MENU_BUTTON: '#delete-account .settings-unit-toggle',
    CHECKBOXES: '#delete-account .delete-account-checkbox',
    INPUT_PASSWORD: '#delete-account form input.password',
    SUBMIT: '#delete-account button[type="submit"]',
    TOOLTIP_INCORRECT_PASSWORD: 'input[type=password] ~ .tooltip',
  },
  SETTINGS_DISPLAY_NAME: {
    INPUT_DISPLAY_NAME: '#display-name input[type=text]',
    MENU_BUTTON: '#display-name button.settings-unit-toggle',
    SUBMIT: '#display-name button[type=submit]',
  },
  SIGNIN: {
    EMAIL: 'input[type=email]',
    EMAIL_NOT_EDITABLE: '.prefillEmail',
    ERROR: '.error',
    HEADER: '#fxa-signin-header',
    LINK_USE_DIFFERENT: '.use-different',
    PASSWORD: 'input[type=password]',
    RESET_PASSWORD: 'a[href^="/reset_password"]',
    SUB_HEADER: '#fxa-signin-header .service',
    SUBMIT: 'button[type=submit]',
    SUBMIT_USE_SIGNED_IN: '.use-logged-in',
    TOOLTIP: '.tooltip',
  },
  SIGNIN_BOUNCED: {
    BACK: '#back',
    CREATE_ACCOUNT: '#create-account',
    HEADER: '#fxa-signin-bounced-header',
    SUPPORT: '#support',
  },
  SIGNIN_COMPLETE: {
    CONTINUE_BUTTON: '.btn-continue',
    HEADER: '#fxa-sign-in-complete-header',
    SERVICE_NAME: '.account-ready-service',
  },
  SIGNIN_PASSWORD: {
    EMAIL: 'input[type=email]',
    EMAIL_NOT_EDITABLE: '.prefillEmail',
    ERROR: '.error',
    HEADER: '#fxa-signin-password-header',
    LINK_FORGOT_PASSWORD: 'a[href^="/reset_password"]',
    LINK_USE_DIFFERENT: '.use-different',
    PASSWORD: 'input[type=password]',
    SHOW_PASSWORD: '#password ~ .show-password-label',
    SUB_HEADER: '#fxa-signin-password-header .service',
    SUCCESS: '.success',
    SUBMIT: 'button[type="submit"]',
    SUBMIT_USE_SIGNED_IN: '.use-logged-in',
    TOOLTIP: 'input[type=password] ~ .tooltip',
  },
  SIGNIN_RECOVERY_CODE: {
    DONE_BUTTON: '.two-step-authentication-done',
    FIRST_CODE: '.recovery-code:first-child',
    INPUT: '.recovery-code',
    LINK: '#use-recovery-code-link',
    MODAL: '#recovery-codes',
    SECOND_CODE: '.recovery-code:nth-child(2)',
    SUBMIT: 'button[type="submit"]',
  },
  SIGNIN_REPORTED: {
    HEADER: '#fxa-sign-in-reported-header',
  },
  SIGNIN_TOKEN_CODE: {
    EMAIL_FIELD: '.verification-email-message',
    ERROR: '.error',
    HEADER: '#fxa-signin-code-header',
    INPUT: '.otp-code',
    LINK_RESEND: '#resend',
    SUCCESS: '.success',
    SUBMIT: 'button[type="submit"]',
    TOOLTIP: '.tooltip',
  },
  SIGNIN_UNBLOCK: {
    EMAIL_FIELD: '.verification-email-message',
    ERROR: '.error',
    HEADER: '#fxa-signin-unblock-header',
    LINK_RESEND: '#resend',
    SUBMIT: 'button[type="submit"]',
    TOOLTIP: '#unblock_code ~ .tooltip',
    UNBLOCK_CODE: '#unblock_code',
    VERIFICATION: '.verification-email-message',
  },
  SIGNUP: {
    AGE: '#age',
    EMAIL: 'input[type=email]',
    ERROR: '.error',
    FIREFOX_FAMILY_SERVICES: '.firefox-family-services',
    HEADER: '#fxa-signup-header',
    LINK_SIGN_IN: 'a#have-account',
    LINK_SUGGEST_EMAIL_DOMAIN_CORRECTION: '#email-suggestion',
    LINK_SUGGEST_SIGN_IN: '.error a[href="/signin"]',
    LINK_SUGGEST_SYNC: '#suggest-sync a',
    MARKETING_EMAIL_OPTIN: 'input.marketing-email-optin',
    MIGRATING_USER: '#suggest-sync',
    PASSWORD: '#password',
    SUB_HEADER: '#fxa-signup-header .service',
    SUBMIT: 'button[type="submit"]',
    SUGGEST_EMAIL_DOMAIN_CORRECTION: '.tooltip-suggest',
    SUGGEST_SIGN_IN: '.error',
    SUGGEST_SYNC: '#suggest-sync',
    TOOLTIP_BOUNCED_EMAIL: '.tooltip',
    VPASSWORD: '#vpassword',
  },
  SIGNUP_COMPLETE: {
    CONTINUE_BUTTON: '.btn-continue',
    HEADER: '#fxa-sign-up-complete-header',
    SERVICE_NAME: '.account-ready-service',
  },
  SIGNUP_PASSWORD: {
    AGE: '#age',
    CHOOSE_WHAT_TO_SYNC_HEADER: '#fxa-choose-what-to-sync-header',
    EMAIL: 'input[type=email]',
    ERROR: '.error',
    ERROR_PASSWORDS_DO_NOT_MATCH: '.error',
    FIREFOX_FAMILY_SERVICES: '.firefox-family-services',
    HEADER: '#fxa-signup-password-header',
    LINK_USE_DIFFERENT: '.use-different',
    MARKETING_EMAIL_OPTIN: 'input.marketing-email-optin',
    PASSWORD: '#password',
    PASSWORD_BALLOON,
    PRIVACY_POLICY: '#fxa-pp',
    SHOW_PASSWORD: '#password ~ .show-password-label',
    SHOW_VPASSWORD: '#vpassword ~ .show-password-label',
    SUBMIT: 'button[type="submit"]',
    TOOLTIP_AGE_REQUIRED: '#age ~ .tooltip',
    TOS: '#fxa-tos',
    TOOLTIP: '.tooltip',
    VPASSWORD: '#vpassword',
    ...CWTS_ENGINES,
  },
  SMS_LEARN_MORE: {
    HEADER: '#firefox-notice',
  },
  SMS_SEND: {
    HEADER: '#fxa-send-sms-header',
    PROMPT_HEADER: '[data-id="prompt-header"]',
    PROMPT_SUBHEADER: '[data-id="prompt-subheader"]',
    LINK_LEARN_MORE: 'a#learn-more',
    LINK_MARKETING: '.marketing-link',
    LINK_MARKETING_ANDROID: '.marketing-link-android',
    LINK_MARKETING_IOS: '.marketing-link-ios',
    LINK_NOT_NOW: 'a[href="https://www.mozilla.org/firefox/accounts"]',
    LINK_START_BROWSING: 'a[href="https://www.mozilla.org/firefox/accounts"]',
    LINK_WHY_IS_THIS_REQUIRED: 'a[href="/sms/why"]',
    PHONE_NUMBER: 'input[type="tel"]',
    PHONE_NUMBER_TOOLTIP: 'input[type="tel"] ~ .tooltip',
    SUBMIT: 'button[type="submit"]',
    SUCCESS: '.success',
  },
  SMS_SENT: {
    HEADER: '#fxa-sms-sent-header',
    LINK_BACK: '#back',
    LINK_RESEND: '#resend',
    LINK_START_BROWSING: 'a[href="https://www.mozilla.org/firefox/accounts"]',
    PHONE_NUMBER_SENT_TO: '#sms-sent-to',
  },
  SMS_WHY_IS_THIS_REQUIRED: {
    CLOSE: '.connect-another-device button[type="submit"]',
    HEADER: '#fxa-why-connect-another-device-header',
  },
  TOS: {
    HEADER: '#fxa-tos-header',
    LINK_BACK: '#fxa-tos-back',
  },
  TOTP: {
    CANCEL_BUTTON: '.totp-cancel',
    CONFIRM_CODE_BUTTON: '.totp-confirm-code',
    CONFIRM_CODE_INPUT: '.totp-code',
    CONFIRM_RECOVERY_INPUT: '.recovery-code',
    CONFIRM_RECOVERY_BUTTON: '.recovery-confirm-code',
    DELETE_BUTTON: '.totp-delete',
    ENABLE_BUTTON: '.secondary-button.totp-create',
    MANUAL_CODE: '.code',
    MENU_BUTTON: '#totp-section .settings-unit-toggle',
    QR_CODE: '.qr-image',
    RECOVERY_CODES_DESCRIPTION: '#recovery-codes .description',
    RECOVERY_CODES_DONE: '#recovery-codes .two-step-authentication-done',
    RECOVERY_CODES_REPLACE: '#recovery-codes .replace-codes-link',
    SHOW_CODE_LINK: '.show-code-link',
    STATUS_DISABLED: '.two-step-authentication .disabled',
    STATUS_ENABLED: '.two-step-authentication .enabled',
    TOOLTIP: '.totp-code + .tooltip',
    UNLOCK_BUTTON: '.two-step-authentication .unlock-button',
    UNLOCK_REFRESH_BUTTON:
      '.two-step-authentication .refresh-verification-state',
    UNLOCK_SEND_VERIFY: '.two-step-authentication .send-verification-email',
    KEY_OK_BUTTON: '.modal-panel button',
  },
  TOTP_SIGNIN: {
    HEADER: '#fxa-totp-code-header',
    INPUT: '.totp-code',
    SUBMIT: 'button[type="submit"]',
  },
  UPDATE_FIREFOX: {
    BUTTON_DOWNLOAD_FIREFOX: '.primary-button',
    HEADER: '#fxa-update-firefox-header',
  },
  WOULD_YOU_LIKE_SYNC: {
    HEADER: '#would-you-like-to-sync',
    SUBMIT: 'button[type=submit]',
    DO_NOT_SYNC: '#do-not-sync-device',
  },
};
/*eslint-enable max-len*/
