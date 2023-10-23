import { UserEntity } from "../auth/user/user.entity";

export const userProvider = [
  {
    provide: "USER_REPOSITORY",
    useValue: UserEntity
  }
];
