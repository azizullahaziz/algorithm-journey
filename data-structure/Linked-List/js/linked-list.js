class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(data) {
        this.head = new Node(data);
        this.tail = this.head;
        this.length = 1;
    }

    insertAtHead(data) {
        const newNode = new Node(data)
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    insertAtTail(data) {
        const newNode = new Node(data);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    showError(message) {
        const mainContainer = document.getElementById('linked-list-visual');
        const errorContainer = document.createElement('div');
        errorContainer.style.color = 'red';
        errorContainer.textContent = 'Error: ' + message;            
        mainContainer.appendChild(errorContainer);
    }

    
    // insert at index
    insertAt(data, index){
        //1. handle edge cases.
        if(index < 0 || index > this.length) {
            throw new Error('Index out of bounds');
        }
        //2. if index is 0, insert at head.
        if(index === 0 ) return this.insertAtHead(data);
        //3. if index is equal to length, insert at tail.
        if(index === this.length) return this.insertAtTail(data);
        //4. create a new node.
        const newNode = new Node(data);
        let current = this.head;
        let position = 0;
        //5. traverse the linked list to find the position.
        while(position < index - 1) {
            current = current.next;
            position++;
        }
        //6. insert the new node at the position.
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
    }
    // remove at index.
    removeAt(index){
        // handle edge cases
        if(index < 0 || index > this.length) throw new Error('Index Out of bounds');
        // if list is empty
        if(this.length == 0 ) throw new Error('List is empty');
        // if index is 0, remove head.
        if(index === 0) {
            this.head = this.head.next;
            this.length--;
            // if list is empty after removing head, set tail to null.
            if(this.length === 0) {
                this.tail = null;
            }

        }

        let current = this.head;
        let position = 0;
        // traverse the linked list to find the position.
        while(position < index -1) {

            current = current.next;
            position++;
        }
        current.next = current.next.next;
        this.length--;


    }
    // modifying the value of a node at a given position.
    modifyAt(data, index) {
        // handle edge cases
        if(index < 0 || index > this.length) throw new Error('Index out of bound');
        if(index === 0) {
            this.head.data = data;
        }
        if(index === this.length - 1) {
            this.tail.data = data;
        }
        let current = this.head;
        let position = 0;
        while(position < index) {
            current = current.next;
            position++;
        }
        current.data = data;
    }
    // reverse the list
    reverse() {
        // handle edge cases
        if(this.length <= 1) return;
        let prev = null;
        let current = this.head;
        let next;
        // travers the linked list and reverse the pointers.
        while(current) {
            next = current.next; //store the next node.
            current.next = prev; // reverse the pointer.
            // move the pointers one step forward.
            prev = current; 
            current = next;
        }
        this.tail = this.head;
        this.head = prev;
    }
    // visualize the linked list in HTML.
    visualize(containerId, title) {
        const mainContainer = document.getElementById(containerId);
        //mainContainer.innerHTML = '';

        const container = document.createElement('div');
        container.className = 'list-container';
        mainContainer.appendChild(container);
        const listTitle = document.createElement('h4');
        listTitle.textContent = title;
        container.appendChild(listTitle);
        let current = this.head;
        // traverse the linked list and create a div for each node.
        while(current) {
            const nodeDiv = document.createElement('div');
            nodeDiv.className = 'node';
            nodeDiv.textContent = current.data;
            container.appendChild(nodeDiv)
            if(current.next) {
                const arrow = document.createElement('span')
                arrow.className = 'arrow';
                arrow.textContent = '→';
                container.appendChild(arrow);
            }

            current = current.next;
        }
        const tailDiv = document.createElement('div');
        tailDiv.className = 'list-tail';
        tailDiv.textContent = 'Length of the list: ' + this.length;
        mainContainer.appendChild(tailDiv);

    }
}