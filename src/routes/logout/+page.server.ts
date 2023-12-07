import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from  './$types';
export const load:PageServerLoad = async () => {
    throw redirect(302, "/")
}

export const actions = {
    default({cookies}){
        cookies.set("user_name", "",{
            path:"/",
            expires:new Date(0)
        })
        cookies.set("bearer_token", "",{
            path:"/",
            expires:new Date(0)
        })
        throw redirect(302,"/login")
    }

}