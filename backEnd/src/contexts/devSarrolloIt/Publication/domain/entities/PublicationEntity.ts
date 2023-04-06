interface PublicationModel {
  id: string;
  title: string;
  description: string;
  status: boolean;
  necessaryRoles: [];
  stacks: [];
  userId: string;
  matchId: string;
}

export { type PublicationModel };
