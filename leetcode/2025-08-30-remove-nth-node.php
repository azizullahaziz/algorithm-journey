<?php
class ListNode {
    public $val = 0;
    public $next = null;
    function __construct($val = 0, $next = null){
        $this->val = $val;
        $this->next = $next;
    }

    function removeNthFromEnd($head, $n){
        //1. define two pointers
        $left = $head;
        $right = $head;
        //2. move right pointer n steps ahead
        for($i = 0; $i < $n; $i++){
            $right = $right->next;
        }
        //3. if right is null, it means we need to remove the head node
        if($right == null){
            return $head->next;
        }
        //4. move both pointers one step at a time until the right pointer reaches the end.
        while($right->next != null){
            $left = $left ->next;
            $right = $right->next;
        }
        //5. remove the nth node from the end
        $left->next = $left->next->next;
        return $head;
    }
}