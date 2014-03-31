print('------------------');
print('IntArray:');

var IntArray = Java.type('int[]');

var array = new IntArray(5);
array[0] = 5;
array[1] = 4;
array[2] = 3;
array[3] = 2;
array[4] = 1;

for (var i = 0; i < array.length; i++) {
    print(array[i]);
}

try {
    array[5] = 23;
} catch (e) {
    print(e.message);
}

array[0] = "17";
print(array[0]);

array[0] = "wrong type";
print(array[0]);

array[0] = "17.3";
print(array[0]);

print('------------------');

for (var i in array) print(i);

print('------------------');

for each (var val in array) print(val);

print('------------------');
print('ArrayList:');

var ArrayList = Java.type('java.util.ArrayList');

var list = new ArrayList();
list.add('a');
list.add('b');
list.add('c');

for each (var el in list) print(el);


print('------------------');
print('HashMap:');

var HashMap = Java.type('java.util.HashMap');

var map = new HashMap();
map.put('foo', 'foo1');
map.put('bar', 'bar1');

for each(var e in map.keySet()) print(e);

for each(var e in map.values()) print(e);


print('------------------');
print('Streams:');

var list2 = new ArrayList();
list2.add("ddd2");
list2.add("aaa2");
list2.add("bbb1");
list2.add("aaa1");
list2.add("bbb3");
list2.add("ccc");
list2.add("bbb2");
list2.add("ddd1");

list2
    .stream()
    .filter(function(el) {
        return el.startsWith("aaa");
    })
    .sorted()
    .forEach(function(el) {
        print(el);
    });