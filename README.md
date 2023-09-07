# Scholarship App

Built with Next.js, this application allows users to connect their Aptos wallet (can be easily adapted with other blockchain's wallet) and submit their Twitter usernames to apply for a scholarship/whitelist. Users can easily express their reasons for approval through a simple and user-friendly form.

After collecting user responses, the user is asked to like and retweet a specified tweet, which can be verified using Twitter APIs (not implemented as for now). All user information and responses are stored in a MongoDB database.

## Prerequisites

Before using this application, ensure that you have the following prerequisites installed:

- [Node.js](https://nodejs.org/): Download and install Node.js.
- npm (Node Package Manager): Included with Node.js installation.

## Installation 

1. Clone this GitHub repository to your local machine:
   ```sh
   git clone https://github.com/alessandrobernieri/scholarship-app.git
   ```

2. Navigate to the project directory:
   ```sh
   cd scholarship-app
   ```

3. Install the required dependencies:
   ```sh
   npm install
   ```

4. Run the development server:
   ```sh
   npm run dev
   ```

5. Open http://localhost:3000 in your web browser to view the application.

You can start customizing the application by editing the `pages/index.js` file. The page will auto-update as you make changes.

## Usage

To configure the application, edit your database settings in `pages/api` and specify the tweet you want users to like and retweet in `public/tweet.html`.

## Learn More

To learn more about Next.js, explore the following resources:

- [Next.js Documentation](https://nextjs.org/docs): Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn): An interactive Next.js tutorial.
- [Next.js GitHub Repository](https://github.com/vercel/next.js): Your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the Vercel Platform, created by the makers of Next.js. Refer to our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for detailed instructions.

## Contribution

Contributions are welcome! If you have any suggestions or improvements, please open an issue or create a pull request on this GitHub repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
