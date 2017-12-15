'use strict';

let dbm;
let type;
let seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db,callback) {
  db.addColumn('eventlog', 'aggregate_id', { type: 'string'}, callback);
};

exports.down = function(db) {
  db.removeColummn('eventlog', 'aggregate_id', callback);
};

exports._meta = {
  "version": 1
};
