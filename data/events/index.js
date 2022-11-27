'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getEvents = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request().query(sqlQueries.eventslist);
        return list.recordset;
    }
    catch (error) {
        return error.message;
    }
}

const getById = async (id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const oneObj = await pool.request()
                        .input('id', sql.Int, id)
                        .query(sqlQueries.eventbyid);
        return oneObj.recordset;
    } catch (error) {
        return error.message;
    }
}

const createEvent = async (obj) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const insertObj = await pool.request()
                        .input('name', sql.NVarChar(50), obj.Name)
                        .input('slug', sql.NVarChar(50), obj.Slug)
                        .input('parentId', sql.Int, obj.ParentId)
                        .input('orders', sql.Int, obj.Orders)
                        .input('metakey', sql.NVarChar(50), obj.Metakey)
                        .input('metadesc', sql.NVarChar(50), obj.Metadesc)
                        .input('createBy', sql.Int, obj.CreateBy)
                        .input('createAt', sql.DateTime, obj.CreateAt)
                        .input('updateBy', sql.Int, obj.UpdateBy)
                        .input('updateAt', sql.DateTime, obj.UpdateAt)
                        .input('status', sql.Int, obj.Status)
                        .query(sqlQueries.createEvent);
        return insertObj.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateEvent = async(id, obj) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const updateObj = await pool.request()
                        .input('name', sql.NVarChar(50), obj.Name)
                        .input('slug', sql.NVarChar(50), obj.Slug)
                        .input('parentId', sql.Int, obj.ParentId)
                        .input('orders', sql.Int, obj.Orders)
                        .input('metakey', sql.NVarChar(50), obj.Metakey)
                        .input('metadesc', sql.NVarChar(50), obj.Metadesc)
                        .input('createBy', sql.Int, obj.CreateBy)
                        .input('createAt', sql.DateTime, obj.CreateAt)
                        .input('updateBy', sql.Int, obj.UpdateBy)
                        .input('updateAt', sql.DateTime, obj.UpdateAt)
                        .input('status', sql.Int, obj.Status)
                        .input('id', sql.Int, id)
                        .query(sqlQueries.updateEvent);
        return updateObj.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteEvent = async (id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const deleteObj = await pool.request()
                        .input('id', sql.Int, id)
                        .query(sqlQueries.deleteEvent);
        return deleteObj.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getEvents,
    getById,
    createEvent,
    updateEvent,
    deleteEvent
}