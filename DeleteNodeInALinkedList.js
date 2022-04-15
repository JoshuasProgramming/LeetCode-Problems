/* Create Linked List class */
class LinkedList{
    
    //constructor doesn't require anything
    //the head of the linked list has a 'null' value as default
    //the length of the linked list has a value of 0 as default
    constructor(){
        this.head = null;
        this.length = 0;
    }
    
    /* Insert method takes in data as the reference/parameter */
    insert(data){
        
        //the head of the linked list will be a new node object
        //this new node object will have the 'data' assigned to it, and 
        this.head = new Node(data, this.head);
        
        //increment the size/length of the linked list as we add a new node 
        this.length++;
    }
    
    /* Prints the data from every node */
    printAll(){
        
        //create a 'current' variable that'll be pointing at the head (specifc node in the linked list)
        let current = this.head;
        
        //create empty array
        let arr = [];
        
        //loop while the current is looking at a node
        while(current){
            
            //put a data of the node into the empty array, 'arr'
            arr.push(current.data);
            
            //reassign the next node to 'current' and loop agian (unless there isn't a next node)
            current = current.next;
        }
        
        //console.log the arr in reverse order
        console.log((arr).reverse());
    }
    
    
    /*Deletes a node from the linked List*/
    deleteNode(valueToDelete){
        
        //get the current by assigning the head to a varaible, 'current'.
        let current = this.head;
        
        //loop while the current is looking at a node
        while(current){
            
            //whenever the current's data is equal to the 'valueToDelete'...
            if(current.data == valueToDelete){
                
                //... reassign the current's data to the next node's data
                current.data = current.next.data
                
                //make the next node equal to the node after the next node (e.g: a -> b -> c -> d | delete b | a -> c -> c -> d | a -> c -> d)
                current.next = current.next.next;
                
                //decrement the length
                this.length--;
            }
            
            //reassign the next node to 'current' and loop agian (unless there isn't a next node)
            current = current.next;
        }
    }
}

/* Create Node class */
class Node{
    //constructor only requires data and next. If the 'next' parameter is empty it'll be set to null by default
    //the data is the value within the node
    //next is the node object after the current node
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}


const deleteNode = () => {
    
    //instantiate a new linked list object. This will contain out node objects
    let ll = new LinkedList();
    
    //loop for the length of 'head' times
    for(let i = 0; i < head.length; i++){
        
        //use the 'insert()' method from the Linked List class to insert each item from the 'head' array
        ll.insert(head[i]);
    }
    
    //use the 'deleteNode()' method from the Linked List class to delete a specific node from the Linked List
    ll.deleteNode(node);
    
    //use the 'printAll()' method from the Linked List class to print the updated linked List nodes
    ll.printAll();
    
    //console log the full linked List, which has now been modified
    console.log(ll)
}

//create variable to store 'head' values
let head = [4,5,1,9];

//create variable to store 'node' value (deleteNode)
let node = 1;

//insert 'head' and 'node' as reference/parameter for the 'deleteNode' function
deleteNode(head,node);
