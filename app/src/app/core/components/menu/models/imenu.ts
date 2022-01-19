import { Iimg } from "src/app/shared/models/iimg";

export interface Imenu {
    logo: Iimg,
    menu: MenuItem[],
}

export interface MenuItem {
    name: string;
    url: string;
}