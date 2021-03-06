import { createAndDropTable, timestampsColumns } from '../util';

const tableName = 'User';

const defineTable = Sequelize => ({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
  },
  ...timestampsColumns(Sequelize),
});

export default createAndDropTable(tableName, defineTable);
