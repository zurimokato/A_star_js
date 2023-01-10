function PQueue(cell) {

	this.cell = cell;
	this.elements = [];

	this.index = 0;


	this.Pqueue = function () {

	}

	this.headpPush = function (heap, cell) {
		heap.push(cell)
		this._siftdown(heap, 0, heap.length - 1)
	}

	this._siftdown = function (heap, startpos, pos) {
		let newitem = heap[pos]
		while (pos > startpos) {
			parentpos = (pos - 1) >> 1
			parent = heap[parentpos]
			if (newitem < parent) {
				heap[pos] = parent
				pos = parentpos
				continue
			}
			break
		}
		heap[pos] = newitem
	}

	this.heappop = function (heap) {
		lastelt = heap.pop()
		if (heap,length>0) {
			returnitem = heap[0]
			heap[0] = lastelt
			this._siftup(heap, 0)
			return returnitem
		}
		return lastelt
	}

	this._siftup=function(heap, pos){
		endpos = heap.length
		startpos = pos
		newitem = heap[pos]
		childpos = 2 * pos + 1
		while (childpos < endpos) {
			rightpos = childpos + 1
			if (rightpos < endpos && !heap[childpos] < heap[rightpos]) {
				childpos = rightpos
			}
			heap[pos] = heap[childpos]
			pos = childpos
			childpos = 2 * pos + 1

		}
		heap[pos] = newitem
		this._siftdown(heap, startpos, pos)
	}
	

	this.isEmpty = function () {
		if (this.elements.length == 0) {
			return true;
		} else {
			return false;
		}
	}
}