import { RoleEntity } from "../auth/role/entity/role.entity";


export const roleProvider = [
  {
    provide: "ROLE_REPOSITORY",
    useValue: RoleEntity
  }
];
