// process.mjs

export const process = (store, order) => {
    // Step 1: Initialize data structures
    const inventoryMap = new Map();
    const stats = [];
    const assignment = [];
    let mismatches = 0;

    // Step 2: Process the inventory
    for (const item of store) {
        inventoryMap.set(item.size, item.quantity);
    }

    // Step 3: Process each order
    for (const orderItem of order) {
        if (orderItem.size.length === 1) {
            // Single-size order
            const size = orderItem.size[0];
            if (inventoryMap.get(size) > 0) {
                inventoryMap.set(size, inventoryMap.get(size) - 1);
                assignment.push({ id: orderItem.id, size });
            } else {
                return false;
            }
        } else if (orderItem.size.length === 2) {
            // Two-size order
            const [size1, size2] = orderItem.size;
            const masterSize = orderItem.masterSize === "s1" ? size1 : size2;
            const altSize = orderItem.masterSize === "s1" ? size2 : size1;

            if (inventoryMap.get(masterSize) > 0) {
                inventoryMap.set(masterSize, inventoryMap.get(masterSize) - 1);
                assignment.push({ id: orderItem.id, size: masterSize });
            } else if (inventoryMap.get(altSize) > 0) {
                inventoryMap.set(altSize, inventoryMap.get(altSize) - 1);
                assignment.push({ id: orderItem.id, size: altSize });
                mismatches++;
            } else {
                return false;
            }
        }
    }

    // Step 4: Update statistics
    for (const [size, quantity] of inventoryMap.entries()) {
        const initialQuantity = store.find(item => item.size === size).quantity;
        stats.push({ size, quantity: initialQuantity - quantity });
    }

    // Step 5: Return the result object
    return {
        stats,
        assignment,
        mismatches
    };
};
