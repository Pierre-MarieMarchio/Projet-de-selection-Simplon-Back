export class ResourceNotFoundException extends Error {
  constructor(id: string ) {
    super(`Resource with id ${id} not found`);
    this.name = "ResourceNotFoundException";
  }
}
