📋 Prerequisites

Before you begin, ensure that you have:

A valid Azure Account

A GitHub Account

A Node.js project hosted on GitHub

Access to create and manage Azure App Services

⚙️ Step 1: Create Azure App Service

Sign in to Azure Portal
.

Navigate to App Services → Create.

Select the following configuration:

Publish: Code

Runtime Stack: Node.js (Latest LTS version)

Operating System: Linux

Region: Choose the nearest region

Complete the setup and create the App Service.

Once deployed, note your App Service name — you’ll need it in the next step.

🔄 Step 2: Connect GitHub Repository to Azure App Service

Go to your created App Service in the Azure Portal.

Select Deployment Center from the left-hand menu.

Under Source, select GitHub.

Sign in to GitHub if prompted.

Choose:

Your Organization / Account

Your Repository

The main branch

Select Workflow option: GitHub Actions.

Azure will automatically generate a GitHub Actions workflow file in your repository under:
.github/workflows/azure-webapps-node.yml

🔐 Step 3: Add Azure Publish Profile as GitHub Secret

In the Azure Portal, open your App Service.

Go to Deployment Center → Manage Publish Profile.

Download the .PublishSettings file.

Open the file in a text editor and copy the entire content.

In your GitHub repository:

Navigate to Settings → Secrets → Actions → New repository secret.

Add a new secret with the name:

AZUREAPPSERVICE_PUBLISHPROFILE


Paste the copied XML content as the value.

⚡ Step 4: Configure GitHub Actions

The workflow file created automatically will:

Trigger on every push to the main branch

Set up the Node.js environment

Install dependencies

Build the app (if applicable)

Deploy to Azure App Service

You can review or adjust this workflow in:

.github/workflows/azure-webapps-node.yml

🚀 Step 5: Deploy Automatically

Once setup is complete:

Commit and push any change to the main branch in GitHub.

GitHub Actions will automatically:

Build your project

Deploy it to your configured Azure App Service

You can track the deployment progress under the Actions tab in your GitHub repository.

🌐 Step 6: Verify Deployment

After the GitHub Actions workflow completes successfully:

Open your Azure App Service URL in the browser.
Example:

https://your-app-service-name.azurewebsites.net


Your app should now be live and automatically updated on every push to main.

🧾 Summary

✅ Source Control: GitHub
✅ CI/CD Pipeline: GitHub Actions
✅ Hosting Platform: Azure App Service
✅ Trigger: Push to main branch
✅ Deployment: Automatic
