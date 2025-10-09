import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

const DATA_FILE = './data.json';

// Helper to read/write data
function readData() {
  if (!fs.existsSync(DATA_FILE)) return [];
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}
function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// Add command
yargs(hideBin(process.argv))
  .command(
    'add [item]',
    'Add a new item',
    (yargs) => {
      yargs.positional('item', {
        describe: 'Item to add',
        type: 'string',
      });
    },
    (argv) => {
      const data = readData();
      const newItem = {
        id: uuidv4(),
        date: new Date().toISOString(),
        item: argv.item,
      };
      data.push(newItem);
      writeData(data);
      console.log('Added:', newItem);
    }
  )
  // Delete command
  .command(
    'delete [id]',
    'Delete an item by id',
    (yargs) => {
      yargs.positional('id', {
        describe: 'ID of item to delete',
        type: 'string',
      });
    },
    (argv) => {
      let data = readData();
      const before = data.length;
      data = data.filter((entry) => entry.id !== argv.id);
      writeData(data);
      if (data.length < before) {
        console.log(`Deleted item with id: ${argv.id}`);
      } else {
        console.log(`No item found with id: ${argv.id}`);
      }
    }
  )
  // List command
  .command(
    'list',
    'List all items',
    () => {},
    () => {
      const data = readData();
      console.log('Items:');
      data.forEach((entry) => {
        console.log(entry);
      });
    }
  )
  .demandCommand(1)
  .help()
  .argv;