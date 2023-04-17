interface PublicationModel {
  id: string;
  title: string;
  description: string;
  status: boolean;
  necessaryRoles: [];
  stacks: [];
  userId: string;
}

export { type PublicationModel };
