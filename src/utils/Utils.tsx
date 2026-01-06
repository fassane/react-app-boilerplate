import { useAppSelector } from "../redux/hook";
import { User } from "./api/user/user.type";
import { ApiBaseUrl } from "./http";


export const isUser = (user: User) => {
    return user?.role === "user";
};

export const isAdmin = (user: User) => {
    return user?.role === "admin" || user?.role === "superadmin";
};

export const useUser = () => {
    const { user } = useAppSelector((s) => s?.user);
    return user as User;
};

export const getName = (user: User) => {
    return user?.first_name +' '+ user?.last_name
}

export const getFirstName = (user: User) => {
    return user?.first_name;
}

export function cleannerError(
    errors: any,
    cleanner: any,
    timeOut: number = 3000
) {
    if (errors) {
        setTimeout(
            () => Object.entries(errors).map(([key]: any) => cleanner(key)),
            timeOut
        );
    }
}

export const getAvatar = (image: string | any) => {
    if (image && !image?.includes("default.png")) {
        if (image.indexOf("http") === 0) return image;
        return `${ApiBaseUrl}/${image}`;
    }
    return "/images/avatar.png";
};

export const getImage = (image: string | any) => {
    if (image && !image?.includes("default.png")) {
        if (image.indexOf("http") === 0) return image;
        return `${ApiBaseUrl}/${image}`;
    }
    return "/images/no_image.svg";
};

export const countUppercase = (str: any) => {
    if (str.replace(/[^A-Z]/g, "")?.length >= 1) {
        return true;
    }
    return false;
};

export const countLowercase = (str: any) => {
    if (str.replace(/[^a-z]/g, "")?.length >= 1) {
        return true;
    }
    return false;
};

export const countNumber = (str: any) => {
    if (str.replace(/[^0-9]/g, "")?.length >= 1) {
        return true;
    }
    return false;
};

export const countCharacters = (str: any) => {
    if (str?.length >= 8) {
        return true;
    }
    return false;
};

export const countSpecial = (str: any) => {
    const punct = `/[!@#$%^&*()_+\\-=\\[\\]{};':"\\|,.<>\\/?]+/;`;
    let count = 0;
    for (let i = 0; i < str?.length; i++) {
        if (!punct.includes(str[i])) {
            continue;
        }
        count++;
    }
    // return count;
    if (count >= 1) {
        return true;
    }
    return false;
};

export const getMessageContactStatus = (item: any) => {
    if (item?.status === "new") {
        return "Nouveau"
    } 
    if (item?.status === "read") {
        return "Lue"
    } 
    if (item?.status === "not_read") {
        return "Non lue"
    }
}
export const getMessageContactStatusClass = (item: any) => {
    if (item?.status === "new") {
        return "new"
    } 
    if (item?.status === "not_read") {
        return "not_read"
    }
    if (item?.status === "not_read") {
        return "new"
    }
}