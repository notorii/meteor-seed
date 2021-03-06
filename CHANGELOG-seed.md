Each entry (version) should have a date and one or more of 3 sections: 'Features', 'Bug Fixes', 'Breaking Changes'. Make sure to `git tag` the commit to match the version. Sub / pre-release versions should be hypenated (i.e. 1.0.3-2).

# 1.1.11 (2016-02-01)

# Bug Fixes

- Do not overwrite user profile on update; only set individual fields.


# 1.1.10 (2016-01-07)

# Bug Fixes
- Add `Config.startup` function and move `Meteor.startup` calls there to ensure config variables are initialized first


# 1.1.9 (2016-01-07)

## Bug Fixes
- Properly set public variables without altering `Meteor.settings`, which was causing (mobile build) issues.


# 1.1.8 (2016-01-07)

## Features
- Remove `.env` environment variables and use meteor `settings.json` instead


# 1.1.7 (2016-01-06)

## Features
- switch to using `.env` file(s) for setting configuration and add `allowedPublic` for explicitly setting which properties are available on the client, to keep credentials secure and not checked in to version control.


# 1.1.6 (2015-12-27)

## Features
- show user name in header if logged in.
- only show push notification settings if in Cordova to satisfy iOS app terms.
- support cc and bcc sending with emails


# 1.1.5 (2015-12-19)

## Features
- add support for getting a moment (unformated) in `msTimezone.curDateTime` function
- add custom format support for `msTimezone.convertFromUTC`, including `fromNow` and `from`
- add user profile page and updating
  - create username on sign up
- add 3 packages: user, slug, template
- remove / switch console.log to console.info 


# 1.1.4 (2015-12-16)

## Features
- add `msTimezone` package for use in converting to and from UTC timezone for storing ALL data in UTC
  - add `user.profile.timezone` database field


# 1.1.3 (2015-12-16)

## Features
- add `noBulk` param to `separateUsers` function for immediate sending of notifications.


# 1.1.2 (2015-12-10)

## Features
- auto scroll to top of page on route change


# 1.1.1 (2015-12-06)

## Features
- add app config domain and root url


# 1.1.0 (2015-12-05)

## Features
- changes nav header to have icon plus html and removes center title
  - potential breaking change: removes header right buttons and header title (and subtitle)
- adds nav-secondary package
- adds home route and page
- adds lodash
- adds max-width LESS
- adds banner-alert package
- style
  - sets select and textare area height
  - adds align-top and img-100 classes
  - sets .font-small line-height
- adds layout classesDevice so any element (not just header) can be styled for device specifics (i.e. iOS header height)
- updates mobile config access rules to handle both http and https
- switch email from Mandrill to Sendgrid as Mandrill no longer has a free tier
- switch alert() calls to nrAlert()
- add notification bulking support and frontend settings
  - add cron job that runs every minute to send any queued bulk messages

## Bug Fixes
- comments out duplicate tests so tinytest will run properly


# 1.0.1 (2015-11-24)

## Features
- move simple-schema collections to bottom of file so can attach schema


# 1.0.0 (2015-11-23)

## Features
- switch less-flexbox default to flex-basis 0 instead of auto (may be a stylistic breaking change)


# 0.0.5 (2015-10-23)

## Features
- upgrade to meteor 1.2 and LESS 2.5
- remove bower and instead use fontawesome meteor package and manually include pikaday, lesshat, and flexbox (since less 2.5 requires 'import' in the file or folder name to work)


# 0.0.4 (2015-05-29)

## Features
- switch to using `notorii:array` atmosphere package (remove local `nrane9:array1` package)
- update npm deploy script to set a forever log file (i.e. for use with logentries)


# 0.0.3 (2015-04-25)

## Features
- add / fill in `README.md`
- rename `CHANGELOG.md` file to `CHANGELOG-seed.md` to differentiate from project changelog
- accounts-password: add resentEnrollmentEmail method


# 0.0.2 (2015-03-31)

## Bug Fixes
- password-reset: log out user first if logged in

## Features
- style: list class updates
- accounts-password: return userId of created user
- style: `.a-div` no underline, add `.list-even-odd`


# 0.0.1 (2015-03-26)

## Features
- [init, start changelog]