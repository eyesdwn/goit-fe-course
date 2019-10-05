const inventory = {
    items: ['Монорельса', 'Фильтр'],
    add(itemName) {
      this.items.push(itemName);
    },
    remove(itemName) {
      this.items = this.items.filter(item => item !== itemName);
    },
  };
  
  const invokeInventoryAction = function(inventory, itemName, action) {
    console.log(`Invoking ${action.name} opeartion on ${itemName}`);
    action.call(inventory, itemName);
  };
  
  invokeInventoryAction(inventory, 'Аптечка', inventory.add);
  // Invoking add opeartion on Аптечка
  
  console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']
  
  invokeInventoryAction(inventory, 'Фильтр', inventory.remove);
  // Invoking remove opeartion on Фильтр
  
  console.log(inventory.items); // ['Монорельса', 'Аптечка']