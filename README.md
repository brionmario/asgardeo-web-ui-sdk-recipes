<img width="1445" alt="repo-banner" src="https://github.com/movinsilva/sample-test-sdk/assets/25959096/873199f8-d9b5-4285-ba73-993fe41f3fb6">

# Interest 

Pinterest like image gallery application built with React, TypeScript, and Vite.

> [!IMPORTANT]
> Uses the [Asgardeo Web UI SDKs](https://github.com/asgardeo/web-ui-sdks) for implementing a native authentication experience.

## Prerequisite Software

To tryout the sample on a local environment, make sure you have the following set of tools on your local machine:

* [Git](https://git-scm.com/downloads) - Open source distributed version control system. For install instructions, refer [this](https://www.atlassian.com/git/tutorials/install-git).
* [Node.js](https://nodejs.org/en/download/) - JavaScript runtime with npm. For install instructions, refer [this](https://nodejs.org/en/download/package-manager/) (`v18 or higher`).
* `Optional` -> [pnpm](https://pnpm.io/) - Alternate npm client for faster package installs. (`v9 or higher`)

## Setup

### Setting up the Source Code

1. [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) the repository.
2. Clone your fork to the local machine.

Replace `<github username>` with your own username.

```shell
git clone https://github.com/<github username>/asgardeo-web-ui-sdk-recipes.git
```

3. Set the original repo as the upstream remote.

```shell
git remote add upstream https://github.com/brionmario/asgardeo-web-ui-sdk-recipes.git
```

### Setting up the Development Environment

1. Install dependencies.

```bash
npm install
```

If you are using `pnpm`, run the following command.

```bash
pnpm install
```

2. Create a `.env.local` file based on the `.env.example` file.

We will use the `.env.local` file to store the environment variables required for the application.

```env
cp .env.example .env.local
```

Following set of environment variables are required for the application to work.

```env
# The client ID of your Asgardeo application
VITE_ASGARDEO_CLIENT_ID=<CLIENT_ID_TAKEN_FROM_ASGARDEO_CONSOLE>

# The base URL of your Asgardeo organization's services.
# Ex: https://api.asgardeo.io/t/acme
VITE_ASGARDEO_SERVICES_URL=<BASE_URL_TAKEN_FROM_ASGARDEO_CONSOLE>

# The callback URL to redirect to after successful authentication with Asgardeo
# Ex: https://localhost:5173
VITE_ASGARDEO_SIGN_IN_REDIRECT_URL=<SIGN_IN_URL_AFTER_A_SUCCESSFUL_AUTHENTICATION>

# The callback URL to redirect to after successful logout from Asgardeo
# Ex: https://localhost:5173
VITE_ASGARDEO_SIGN_OUT_REDIRECT_URL=<SIGN_OUT_URL_AFTER_A_SUCCESSFUL_AUTHENTICATION>
```

### Setting up Asgardeo

### Create an Application on Asgardeo

1. Go to the [Asgardeo Console](https://console.asgardeo.io) and sign in.
2. Click on the **Applications** tab on the left sidebar.
3. Click on the **New Application** button.
4. Select **Standard Based Application** as the application type.
5. Give a name to the application and select `OAuth2.0 OpenID Connect` as the protocol and click **Create**.


### Configure Protocol Settings

1. On the settings page of the created application, click on the **Protocol Settings** tab.
2. Copy the `Client ID` and paste it in the `VITE_ASGARDEO_CLIENT_ID` field in the `.env.local` file.
  
  ```env
  VITE_ASGARDEO_CLIENT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  ```
3. Change the `Allowed grant types` from `Client Credentials` to `Code`.
4. Set the `Client Authentication` to `Public client`.
5. Click on Update.

### Enable App-Native Authentication

1. On the settings page of the created application, click on the **Advanced** tab.
2. In the `App-Native Authentication` section, click on the `Enable app-native authentication API` checkbox.
3. Click on Update.

## Running the Application

To start the application, run the following command.

```bash
npm run dev
```

If you are using `pnpm`, run the following command.

```bash
pnpm dev
```

## License
This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.
