module.exports = function(sequelize, DataTypes) {
    return sequelize.define('authtestdata', {
        auttestdata: DataTypes.STRING,
        owner: DataTypes.INTEGER
    });
};