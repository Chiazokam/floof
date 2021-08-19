'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Banks',
      [
        {
          id: '3553af11-f2a4-4e5e-9f28-170c52e568fa',
          name: 'GTBank',
          logo: 'https://res.cloudinary.com/zokky/image/upload/v1549607665/logo1.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '3ad3fd8c-f6c9-4f02-9f0b-cc78cd4daa35',
          name: 'Zenith Bank',
          logo: 'https://res.cloudinary.com/zokky/image/upload/v1549607665/logo1.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 'ef3b6772-c10a-48ae-947a-012426308959',
          name: 'Fidelity Bank',
          logo: 'https://res.cloudinary.com/zokky/image/upload/v1549607665/logo1.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '5d2c95e6-2981-4947-af94-0754ab0ec53b',
          name: 'Kuda Bank',
          logo: 'https://res.cloudinary.com/zokky/image/upload/v1549607665/logo1.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 'db32b66c-83d0-46ec-9484-bd2be4e04849',
          name: 'Polaris Bank',
          logo: 'https://res.cloudinary.com/zokky/image/upload/v1549607665/logo1.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '2f05bdc8-f26a-4713-a934-a426e1ab5ec4',
          name: 'Wallets Africa',
          logo: 'https://res.cloudinary.com/zokky/image/upload/v1549607665/logo1.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
            id: '5a3b3b7b-e416-4025-a22f-3d6c464935f4',
            name: 'Access Bank',
            logo: 'https://res.cloudinary.com/zokky/image/upload/v1549607665/logo1.jpg',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: '19fa5aca-ec6c-4bfd-92a2-f9520aa37dfd',
            name: 'FCMB',
            logo: 'https://res.cloudinary.com/zokky/image/upload/v1549607665/logo1.jpg',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: '27e0ba2b-a72f-4753-9357-2bca01424add',
            name: 'Barter',
            logo: 'https://res.cloudinary.com/zokky/image/upload/v1549607665/logo1.jpg',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: '5b4f3eaa-182d-47a3-8019-5066bbbdf826',
            name: 'Standard Chartered',
            logo: 'https://res.cloudinary.com/zokky/image/upload/v1549607665/logo1.jpg',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: '578d00c8-8bbc-432c-83bf-6a34dce02189',
            name: 'Stanbic IBTC',
            logo: 'https://res.cloudinary.com/zokky/image/upload/v1549607665/logo1.jpg',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: '0d645c1d-e453-437a-b4aa-8246c168f753',
            name: 'Union Bank',
            logo: 'https://res.cloudinary.com/zokky/image/upload/v1549607665/logo1.jpg',
            createdAt: new Date(),
            updatedAt: new Date()
          }
      ],
      {}
    ),
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Banks', null, {})
};
