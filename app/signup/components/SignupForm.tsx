import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PANELS } from '../constants';

type FormValues = {
  username: string;
  email: string;
  tosAccepted: boolean;
  walletAddress: string;
};

type SignupFormProps = {
  setSelectedPanel: React.Dispatch<React.SetStateAction<string>>;
};

const SignupForm = ({ setSelectedPanel }: SignupFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    setSelectedPanel(PANELS.GITHUB);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto my-10">
      <div className="mb-6">Register as a Developer</div>
      <div className="mb-6">
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Username
        </label>
        <input
          id="username"
          className={`input ${
            errors.username ? 'border-red-500' : 'border-gray-300'
          } block w-full px-4 py-2 text-sm border rounded-md focus:ring-blue-500 focus:border-blue-500`}
          {...register('username', {
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username must be at least 3 characters long'
            },
            maxLength: {
              value: 20,
              message: 'Username must not exceed 20 characters'
            },
            pattern: {
              value: /^[A-Za-z0-9]+$/i,
              message: 'Username must not contain special characters'
            }
          })}
        />
        {errors.username && (
          <p className="mt-2 text-sm text-red-600">{errors.username.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          className={`input ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } block w-full px-4 py-2 text-sm border rounded-md focus:ring-blue-500 focus:border-blue-500`}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Email must include an @ symbol'
            }
          })}
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="walletAddress"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Wallet Address
        </label>
        <input
          id="walletAddress"
          className={`input ${
            errors.walletAddress ? 'border-red-500' : 'border-gray-300'
          } block w-full px-4 py-2 text-sm border rounded-md focus:ring-blue-500 focus:border-blue-500`}
          {...register('walletAddress', {
            required: 'Wallet address is required',
            validate: (value) =>
              value.startsWith('0x') && value.length === 42
                ? true
                : 'Wallet address must start with 0x and be 42 characters long'
          })}
        />
        {errors.walletAddress && (
          <p className="mt-2 text-sm text-red-600">
            {errors.walletAddress.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="tosAccepted"
            className={`checkbox ${
              errors.tosAccepted ? 'border-red-500' : 'border-gray-300'
            } h-4 w-4 text-blue-600 border rounded focus:ring-blue-500`}
            {...register('tosAccepted', {
              required: 'You must accept the Terms of Service'
            })}
          />
          <label
            htmlFor="tosAccepted"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            I accept the Terms of Service
          </label>
        </div>
        {errors.tosAccepted && (
          <p className="mt-2 text-sm text-red-600">
            {errors.tosAccepted.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Continue
      </button>
    </form>
  );
};

export default SignupForm;
