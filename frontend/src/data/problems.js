export const PROBLEMS = {
    "two-sum": {
        id: "two-sum",
        title: "Two Sum",
        difficulty: "Easy",
        category: "Array • Hash Table",
        description: {
            text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
            notes: [
                "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
                "You can return the answer in any order.",
            ],
        },
        examples: [
            {
                input: "nums = [2,7,11,15], target = 9",
                output: "[0,1]",
                explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
            },
            {
                input: "nums = [3,2,4], target = 6",
                output: "[1,2]",
            },
            {
                input: "nums = [3,3], target = 6",
                output: "[0,1]",
            },
        ],
        constraints: [
            "2 ≤ nums.length ≤ 10⁴",
            "-10⁹ ≤ nums[i] ≤ 10⁹",
            "-10⁹ ≤ target ≤ 10⁹",
            "Only one valid answer exists",
        ],
        starterCode: {
            javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
            python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
            java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
        },
        expectedOutput: {
            javascript: "[0,1]\n[1,2]\n[0,1]",
            python: "[0, 1]\n[1, 2]\n[0, 1]",
            java: "[0, 1]\n[1, 2]\n[0, 1]",
        },
    },

    "reverse-string": {
        id: "reverse-string",
        title: "Reverse String",
        difficulty: "Easy",
        category: "String • Two Pointers",
        description: {
            text: "Write a function that reverses a string. The input string is given as an array of characters s.",
            notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
        },
        examples: [
            {
                input: 's = ["h","e","l","l","o"]',
                output: '["o","l","l","e","h"]',
            },
            {
                input: 's = ["H","a","n","n","a","h"]',
                output: '["h","a","n","n","a","H"]',
            },
        ],
        constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
        starterCode: {
            javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
            python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
            java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
        },
        expectedOutput: {
            javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
            python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
            java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
        },
    },

    "valid-palindrome": {
        id: "valid-palindrome",
        title: "Valid Palindrome",
        difficulty: "Easy",
        category: "String • Two Pointers",
        description: {
            text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
            notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
        },
        examples: [
            {
                input: 's = "A man, a plan, a canal: Panama"',
                output: "true",
                explanation: '"amanaplanacanalpanama" is a palindrome.',
            },
            {
                input: 's = "race a car"',
                output: "false",
                explanation: '"raceacar" is not a palindrome.',
            },
            {
                input: 's = " "',
                output: "true",
                explanation:
                    's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
            },
        ],
        constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
        starterCode: {
            javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
            python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
            java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
        },
        expectedOutput: {
            javascript: "true\nfalse\ntrue",
            python: "True\nFalse\nTrue",
            java: "true\nfalse\ntrue",
        },
    },

    "maximum-subarray": {
        id: "maximum-subarray",
        title: "Maximum Subarray",
        difficulty: "Medium",
        category: "Array • Dynamic Programming",
        description: {
            text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
            notes: [],
        },
        examples: [
            {
                input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
                output: "6",
                explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
            },
            {
                input: "nums = [1]",
                output: "1",
                explanation: "The subarray [1] has the largest sum 1.",
            },
            {
                input: "nums = [5,4,-1,7,8]",
                output: "23",
                explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
            },
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
            python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
            java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
        },
        expectedOutput: {
            javascript: "6\n1\n23",
            python: "6\n1\n23",
            java: "6\n1\n23",
        },
    },

    "container-with-most-water": {
        id: "container-with-most-water",
        title: "Container With Most Water",
        difficulty: "Medium",
        category: "Array • Two Pointers",
        description: {
            text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
            notes: [
                "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
                "Return the maximum amount of water a container can store.",
                "Notice that you may not slant the container.",
            ],
        },
        examples: [
            {
                input: "height = [1,8,6,2,5,4,8,3,7]",
                output: "49",
                explanation:
                    "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
            },
            {
                input: "height = [1,1]",
                output: "1",
            },
        ],
        constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
            python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
            java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
        },
        expectedOutput: {
            javascript: "49\n1",
            python: "49\n1",
            java: "49\n1",
        },
    },

    "merge-two-sorted-lists": {
        id: "merge-two-sorted-lists",
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        category: "Linked List • Two Pointers",
        description: {
            text: "Merge two sorted linked lists and return it as a new sorted list.",
            notes: ["The new list should be made by splicing together the nodes of the first two lists."],
        },
        examples: [
            {
                input: "l1 = [1,2,4], l2 = [1,3,4]",
                output: "[1,1,2,3,4,4]",
            },
            {
                input: "l1 = [], l2 = []",
                output: "[]",
            },
            {
                input: "l1 = [], l2 = [0]",
                output: "[0]",
            },
        ],
        constraints: [
            "The number of nodes in both lists is in the range [0, 50].",
            "-100 ≤ Node.val ≤ 100",
            "Both lists are sorted in non-decreasing order.",
        ],
        starterCode: {
            javascript: `function mergeTwoLists(l1, l2) {
  // Write your solution here
  
}

// Test cases
console.log(mergeTwoLists([1,2,4], [1,3,4])); // Expected: [1,1,2,3,4,4]
console.log(mergeTwoLists([], [])); // Expected: []
console.log(mergeTwoLists([], [0])); // Expected: [0]`,
            python: `def mergeTwoLists(l1, l2):
    # Write your solution here
    pass

# Test cases
print(mergeTwoLists([1,2,4], [1,3,4]))  # Expected: [1,1,2,3,4,4]
print(mergeTwoLists([], []))  # Expected: []
print(mergeTwoLists([], [0]))  # Expected: [0]`,
            java: `import java.util.*;

class Solution {
    public static List<Integer> mergeTwoLists(List<Integer> l1, List<Integer> l2) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(mergeTwoLists(Arrays.asList(1,2,4), Arrays.asList(1,3,4))); // Expected: [1,1,2,3,4,4]
        System.out.println(mergeTwoLists(Arrays.asList(), Arrays.asList())); // Expected: []
        System.out.println(mergeTwoLists(Arrays.asList(), Arrays.asList(0))); // Expected: [0]
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,1,2,3,4,4]\n[]\n[0]",
            python: "[1, 1, 2, 3, 4, 4]\n[]\n[0]",
            java: "[1, 1, 2, 3, 4, 4]\n[]\n[0]",
        },
    },
    "best-time-to-buy-sell-stock": {
        id: "best-time-to-buy-sell-stock",
        title: "Best Time To Buy and Sell Stock",
        difficulty: "Easy",
        category: "Array • Dynamic Programming",
        description: {
            text: "Given an array prices where prices[i] is the price of a stock on day i, return the maximum profit you can achieve.",
            notes: ["You must buy before you sell.", "If no profit is possible, return 0."],
        },
        examples: [
            {
                input: "prices = [7,1,5,3,6,4]",
                output: "5",
                explanation: "Buy at 1, sell at 6 → profit = 5.",
            },
            {
                input: "prices = [7,6,4,3,1]",
                output: "0",
                explanation: "No profitable trade.",
            },
        ],
        constraints: ["1 ≤ prices.length ≤ 10⁵", "0 ≤ prices[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function maxProfit(prices) {
  // Write your solution here
  
}

console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1])); // Expected: 0`,
            python: `def maxProfit(prices):
    # Write your solution here
    pass

print(maxProfit([7,1,5,3,6,4]))  # Expected: 5
print(maxProfit([7,6,4,3,1]))  # Expected: 0`,
            java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4})); // Expected: 5
        System.out.println(maxProfit(new int[]{7,6,4,3,1})); // Expected: 0
    }
}`,
        },
        expectedOutput: {
            javascript: "5\n0",
            python: "5\n0",
            java: "5\n0",
        },
    },

    "move-zeroes": {
        id: "move-zeroes",
        title: "Move Zeroes",
        difficulty: "Easy",
        category: "Array • Two Pointers",
        description: {
            text: "Given an array nums, move all 0's to the end while maintaining the relative order of the non-zero elements.",
            notes: ["You must do this in-place without making a copy of the array."],
        },
        examples: [
            {
                input: "nums = [0,1,0,3,12]",
                output: "[1,3,12,0,0]",
            },
            {
                input: "nums = [0]",
                output: "[0]",
            },
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁵", "-2³¹ ≤ nums[i] ≤ 2³¹ − 1"],
        starterCode: {
            javascript: `function moveZeroes(nums) {
  // Write your solution here
  
}

let arr1 = [0,1,0,3,12];
moveZeroes(arr1);
console.log(arr1); // Expected: [1,3,12,0,0]

let arr2 = [0];
moveZeroes(arr2);
console.log(arr2); // Expected: [0]`,
            python: `def moveZeroes(nums):
    # Write your solution here
    pass

arr1 = [0,1,0,3,12]
moveZeroes(arr1)
print(arr1)  # Expected: [1,3,12,0,0]

arr2 = [0]
moveZeroes(arr2)
print(arr2)  # Expected: [0]`,
            java: `import java.util.*;

class Solution {
    public static void moveZeroes(int[] nums) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        int[] arr1 = {0,1,0,3,12};
        moveZeroes(arr1);
        System.out.println(Arrays.toString(arr1)); // Expected: [1,3,12,0,0]
        
        int[] arr2 = {0};
        moveZeroes(arr2);
        System.out.println(Arrays.toString(arr2)); // Expected: [0]
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,3,12,0,0]\n[0]",
            python: "[1, 3, 12, 0, 0]\n[0]",
            java: "[1, 3, 12, 0, 0]\n[0]",
        },
    },
    "linked-list-cycle": {
        id: "linked-list-cycle",
        title: "Linked List Cycle",
        difficulty: "Easy",
        category: "Linked List • Two Pointers",
        description: {
            text: "Given the head of a linked list, determine if the list has a cycle.",
            notes: ["Use Floyd’s Cycle Detection (slow/fast pointers)."],
        },
        examples: [
            { input: "head = [3,2,0,-4], pos = 1", output: "true" },
            { input: "head = [1,2], pos = 0", output: "true" },
            { input: "head = [1], pos = -1", output: "false" },
        ],
        constraints: ["0 ≤ Node.val ≤ 10⁵", "-1 ≤ pos ≤ 10⁴"],
        starterCode: {
            javascript: `function hasCycle(head) {
  // Write your solution here
  
}

console.log(hasCycle([3,2,0,-4])); // Expected: true
console.log(hasCycle([1,2])); // Expected: true
console.log(hasCycle([1])); // Expected: false`,
            python: `def hasCycle(head):
    # Write your solution here
    pass

print(hasCycle([3,2,0,-4]))  # Expected: True
print(hasCycle([1,2]))  # Expected: True
print(hasCycle([1]))  # Expected: False`,
            java: `class Solution {
    public static boolean hasCycle(int[] head) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(hasCycle(new int[]{3,2,0,-4})); // Expected: true
        System.out.println(hasCycle(new int[]{1,2})); // Expected: true
        System.out.println(hasCycle(new int[]{1})); // Expected: false
    }
}`,
        },
        expectedOutput: {
            javascript: "true\ntrue\nfalse",
            python: "True\nTrue\nFalse",
            java: "true\ntrue\nfalse",
        },
    },

};

export const LANGUAGE_CONFIG = {
    javascript: {
        name: "JavaScript",
        icon: "/javascript.png",
        monacoLang: "javascript",
    },
    python: {
        name: "Python",
        icon: "/python.png",
        monacoLang: "python",
    },
    java: {
        name: "Java",
        icon: "/java.png",
        monacoLang: "java",
    },
};