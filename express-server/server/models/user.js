module.exports = function (sequelize, DataTypes) {
    return sequelize.define('users', {
        username: DataTypes.STRING,
        passwordhash: DataTypes.STRING
    });
};