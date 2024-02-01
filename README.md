This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

#process
1st
//next
npm i nvm
nvm i 20
nvm use 20
npm i
npm run dev

2nd
//hardhat server
naya termial
npx hardhat node

3rd
naya termial
// harhat deloy contract
npx hardhat run --network localhost scripts/deploy.js

make sure to add localhost networks in
metamask by :https://www.youtube.com/watch?v=wDueg2_aOTA
then add localhost accounts by adding private key given in 2rd step in response in terminal :
by going to metamask and doing steps given
1>click in account
2>add acount or hardware
3>import account paste the private key of the any 20 accounts given in the terminal of 2nd

then create an account note id is 0 based index
mostly in table search for your 
