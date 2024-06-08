import { MigrationInterface, QueryRunner } from 'typeorm';

export class TestChange1717827351418 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('select version()');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
