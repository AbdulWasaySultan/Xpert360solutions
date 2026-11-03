import { z } from 'zod';
import { parsePhoneNumberFromString } from 'libphonenumber-js/mobile';

export const strictPakistanMobileSchema = z.object({
  mobileNumber: z
    .string()
    .min(1, 'Mobile number is required')
    .transform((val, ctx) => {
      // Parse the string specifically using Pakistan (PK) rules
      const phoneNumber = parsePhoneNumberFromString(val, 'PK');

      // 1. Ensure it's a valid phone number system structure
      // 2. Ensure it belongs explicitly to Pakistan (PK country code)
      // 3. Ensure it is a mobile line (not a landline/PTCL number)
      if (
        !phoneNumber ||
        !phoneNumber.isValid() ||
        phoneNumber.country !== 'PK' ||
        phoneNumber.getType() !== 'MOBILE'
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Please provide a valid Pakistani mobile network number',
        });
        return z.NEVER;
      }

      // Optional: Standardize formatting to E.164 (+923XXXXXXXXX) before saving to your DB
      return phoneNumber.format('E.164');
    }),
});
