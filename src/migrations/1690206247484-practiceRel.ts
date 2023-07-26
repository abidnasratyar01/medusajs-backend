import { MigrationInterface, QueryRunner } from "typeorm";

export class PracticeRel1690206247484 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE customer_audit(
                id CHAR(50),
                created_at DATE,
                updated_at DATE,
                customer_id CHAR(50) REFERENCES customer(id),
                PRIMARY KEY(id)
             );`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("customer_audit", true);
  }
}
