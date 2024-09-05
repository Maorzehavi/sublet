'use server'
import { profileSchema } from "./schemas";

export const createProfileAction = async (prevState: any, formData: FormData) => {
    try {
        const rawData = Object.fromEntries(formData)
        const validatedData = profileSchema.parse(rawData)
        console.log(validatedData)
        return { message: 'Profile Created' }
    } catch (error) {
        return { message: 'there was an error...'}
    }
}