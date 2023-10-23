import { UserEntity } from "../auth/user/user.entity";


export const adminUserProviders = [
  {
    provide: "ADMIN_USER_REPOSITORY",
    useValue: UserEntity
  }
];
