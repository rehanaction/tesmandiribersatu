select o.orderNumber, o.status,sum((od.quantityOrdered*od.priceEach)) as total from orders o join orderdetails od on o.orderNumber=od.orderNumber where o.status='shipped' GROUP BY o.orderNumber