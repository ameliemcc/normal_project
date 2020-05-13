import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
  // eslint-disable-next-line no-dupe-keys
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL',
});
